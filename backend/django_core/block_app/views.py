from django.db.models import Prefetch
from django_filters.rest_framework.backends import DjangoFilterBackend
from django.http import JsonResponse
from django.views import View
from django.shortcuts import get_object_or_404
from django.utils import timezone
from django_core.base_viewsets import BaseAdminViewSet

from rest_framework import viewsets, status, generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied

from block_app.models import Block, TestQuestion, TestAttempt, UserBlockProgress
from block_app.serializers import BlockSerializer, TestSerializer
from block_app.models import Test


class BlockReadOnlyViewSet(viewsets.ReadOnlyModelViewSet):

    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ["module"]
    serializer_class = BlockSerializer
    queryset = Block.objects.select_related("test_content").prefetch_related(
        Prefetch(
            "test_content__questions",
            queryset=TestQuestion.objects.select_related("question")
            .prefetch_related("question__options")
            .order_by("order"),
            to_attr="prefetched_questions",
        )
    )

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        test = instance.test_content

        if not test:
            return super().retrieve(request, *args, **kwargs)

        test_attempt = TestAttempt.objects.filter(user=request.user, test=test).last()

        if test_attempt:
            if test_attempt.test.time_to_complete and test_attempt.created_at:
                time_limit = test_attempt.created_at + test_attempt.test.time_to_complete
                if timezone.now() > time_limit:
                    raise PermissionDenied("Time is up")

            module = instance.module
            if module.deadline and timezone.now() > module.deadline:
                raise PermissionDenied("Module deadline exceeded")

        return super().retrieve(request, *args, **kwargs)


class StartTestAttemptAPIView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        test_id = request.data.get("test_id")
        if not test_id:
            return Response({"error": "test_id is required"}, status=status.HTTP_400_BAD_REQUEST)

        test = Test.objects.filter(id=test_id).first()
        if not test:
            return Response({"error": "Test not found"}, status=status.HTTP_404_NOT_FOUND)

        module = test.block_set.first().module
        if module.deadline and timezone.now() > module.deadline:
            raise PermissionDenied("Module deadline exceeded")

        test_attempt = TestAttempt.objects.filter(user=request.user, test=test, finished_at__isnull=True).last()

        if not test_attempt:
            test_attempt = TestAttempt.objects.create(user=request.user, test=test)

        serializer = TestSerializer(test)
        return Response({"attempt_id": test_attempt.id, "test": serializer.data})


class SubmitAnswerAPIView(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        attempt_id = request.data.get("attempt_id")
        answers = request.data.get("answers", [])

        if not attempt_id:
            return Response({"error": "attempt_id is required"}, status=status.HTTP_400_BAD_REQUEST)

        attempt = TestAttempt.objects.filter(id=attempt_id, user=request.user).first()
        if not attempt:
            return Response({"error": "Attempt not found"}, status=status.HTTP_404_NOT_FOUND)

        if attempt.test.time_to_complete:
            end_time = attempt.created_at + attempt.test.time_to_complete
            if timezone.now() > end_time:
                raise PermissionDenied("Time is up")

        attempt.user_answers.add(*answers)
        return Response({"message": "Answers saved successfully"})


class BlockAdminViewSet(BaseAdminViewSet):
    serializer_class = BlockSerializer
    queryset = Block.objects.select_related("test_content").prefetch_related(
        Prefetch(
            "test_content__questions",
            queryset=TestQuestion.objects.select_related("question")
            .prefetch_related("question__options")
            .order_by("order"),
            to_attr="prefetched_questions",
        )
    )

class AcknowledgeBlockView(View):
    def post(self, request, id):
        block = get_object_or_404(Block, id=id)
        UserBlockProgress.objects.get_or_create(user=request.user, block=block)
        return JsonResponse({"status": "ok"})

    def get(self, request):
        module = request.GET.get("module")
        blocks = UserBlockProgress.objects.filter(user=request.user, block__module=module)
        block_ids = list(blocks.values_list("block_id", flat=True))
        return JsonResponse({"completed_blocks": block_ids})

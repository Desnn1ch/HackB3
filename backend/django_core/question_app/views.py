from rest_framework import status
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from drf_yasg.utils import swagger_auto_schema

from django_core.base_viewsets import BaseAdminViewSet
from question_app.models import UserAnswer, Question, QuestionOptions
from question_app.serializers import UserAnswerSerializer, UserAnswerAdminSerializer


class UserAnswerView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserAnswerSerializer

    def get_serializer(self, *args, **kwargs):
        return self.serializer_class(*args, **kwargs)

    @swagger_auto_schema(responses={200: UserAnswerSerializer(many=True)})
    def get(self, request, question_id):
        answers = UserAnswer.objects.filter(
            options__question_id=question_id, user=request.user
        ).distinct()
        serializer = self.get_serializer(answers, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @swagger_auto_schema(request_body=UserAnswerSerializer, responses={201: UserAnswerSerializer})
    def post(self, request):
        question_id = request.data.get('question_id')
        selected_option_ids = request.data.get('options', [])

        question = get_object_or_404(Question, id=question_id)
        selected_options = QuestionOptions.objects.filter(id__in=selected_option_ids, question=question)

        if not selected_options:
            return Response({'error': 'No valid options selected'}, status=status.HTTP_400_BAD_REQUEST)

        is_correct = self._check_answer_correctness(question, selected_option_ids)
        user_answer = UserAnswer.objects.create(user=request.user, is_correct=is_correct)
        user_answer.options.set(selected_options)

        return Response(self.get_serializer(user_answer).data, status=status.HTTP_201_CREATED)

    def _check_answer_correctness(self, question, selected_option_ids):
        correct_options = set(
            QuestionOptions.objects.filter(question=question, is_correct=True).values_list('id', flat=True)
        )
        user_selected_options = set(selected_option_ids)
        return user_selected_options == correct_options


class UserAnswerAdminViewSet(BaseAdminViewSet):
    queryset = UserAnswer.objects.all()
    serializer_class = UserAnswerAdminSerializer

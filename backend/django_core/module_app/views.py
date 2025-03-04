from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets

from django_core.base_viewsets import BaseAdminViewSet
from .models import Module
from .serializers import ModuleSerializer


class ModuleReadOnlyViewSet(viewsets.ReadOnlyModelViewSet):
    filter_backends = [DjangoFilterBackend]
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer
    filterset_fields = ["course"]

    def get_queryset(self):
        user = self.request.user
        qs = super().get_queryset()
        return qs.filter(course__in=user.courses.all())


class ModuleAdminViewSet(BaseAdminViewSet):
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer


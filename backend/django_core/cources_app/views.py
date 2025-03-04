from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from django_core.base_viewsets import BaseAdminViewSet
from .models import Course
from .serializers import CourseSerializer


class CourseViewSet(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user

        if user.is_staff:
            return Course.objects.all()
        return user.courses.all()


class CourseAdminViewSet(BaseAdminViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

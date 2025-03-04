from rest_framework import viewsets

from django_core.permissions import IsStaffOrSuperUser


class BaseAdminViewSet(viewsets.ModelViewSet):
    permission_classes = [IsStaffOrSuperUser]
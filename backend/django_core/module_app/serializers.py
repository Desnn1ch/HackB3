from rest_framework import serializers

from module_app.models import Module


class ModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Module
        fields = ["id", "title", "description", "deadline"]
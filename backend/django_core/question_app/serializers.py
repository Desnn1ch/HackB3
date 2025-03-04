from rest_framework import serializers

from question_app.models import QuestionOptions, UserAnswer


class UserAnswerSerializer(serializers.ModelSerializer):
    options = serializers.PrimaryKeyRelatedField(queryset=QuestionOptions.objects.all(), many=True)
    question_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = UserAnswer
        fields = ['id', 'options', 'question_id', 'is_correct']
        read_only_fields = ['is_correct']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        if instance.options.exists():
            representation['question_id'] = instance.options.first().question_id
        return representation


class UserAnswerAdminSerializer(UserAnswerSerializer):
    class Meta:
        model = UserAnswer
        fields = ['id', 'user', 'options', 'question_id', 'is_correct']


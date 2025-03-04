from rest_framework import serializers

from question_app.models import QuestionOptions
from .models import Test, Block, TestQuestion


class OptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = QuestionOptions
        fields = ["id", "title"]


class QuestionSerializer(serializers.ModelSerializer):

    title = serializers.CharField(source="question.title", read_only=True)
    options = OptionSerializer(many=True, read_only=True, source="question.options")

    class Meta:
        model = TestQuestion
        fields = ["id", "title", "options"]


class TestSerializer(serializers.Serializer):

    questions = QuestionSerializer(many=True)

    class Meta:
        model = Test
        fields = ["id", "time_to_complete", "questions"]


class BlockSerializer(serializers.ModelSerializer):

    test_content = TestSerializer()

    class Meta:
        fields = [
            "text_content",
            "video_content",
            "test_content",
        ]
        model = Block

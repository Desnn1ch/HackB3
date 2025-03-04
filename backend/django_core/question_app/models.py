from django.contrib.auth import get_user_model
from django.db import models


User = get_user_model()


class Question(models.Model):
    description = models.CharField(max_length=100)


class QuestionOptions(models.Model):
    question = models.ForeignKey(
        Question, on_delete=models.CASCADE, related_name="options"
    )
    title = models.CharField(max_length=1024)
    is_correct = models.BooleanField(default=False)


class UserAnswer(models.Model):
    options = models.ManyToManyField(QuestionOptions)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    is_correct = models.BooleanField()

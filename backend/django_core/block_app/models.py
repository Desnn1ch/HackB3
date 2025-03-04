from django.contrib.auth import get_user_model
from django.db import models
from django.utils import timezone


User = get_user_model()


class Block(models.Model):

    module = models.ForeignKey("module_app.Module", on_delete=models.CASCADE)
    text_content = models.TextField()
    video_content = models.FileField(upload_to="videos/")
    test_content = models.ForeignKey("Test", on_delete=models.CASCADE)


class Test(models.Model):
    time_to_complete = models.DurationField(null=True, blank=True)


class TestQuestion(models.Model):
    test = models.ForeignKey(Test, on_delete=models.CASCADE, related_name="questions")
    question = models.ForeignKey("question_app.Question", on_delete=models.CASCADE)
    order = models.PositiveSmallIntegerField(default=0)


class TestAttempt(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    test = models.ForeignKey(Test, on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    finished_at = models.DateTimeField(null=True, blank=True)

class Block(models.Model):
    title = models.CharField(max_length=255)
    module = models.IntegerField()

class UserBlockProgress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    block = models.ForeignKey(Block, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('user', 'block')  # for uniq


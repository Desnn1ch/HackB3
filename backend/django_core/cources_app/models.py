from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Course(models.Model):
    title = models.CharField(max_length=4096)
    description = models.TextField()
    deadline = models.DateField(null=True, blank=True)

    assignments = models.ManyToManyField(to=User, related_name="courses", blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

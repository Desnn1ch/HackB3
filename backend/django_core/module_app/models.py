from django.apps import apps
from django.db import models



class Module(models.Model):
    course = models.ForeignKey("cources_app.Course", on_delete=models.CASCADE)

    title = models.CharField(max_length=4096)
    description = models.TextField()
    deadline = models.DateField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

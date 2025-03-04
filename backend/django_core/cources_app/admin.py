from django.contrib import admin

from cources_app.models import Course


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    pass


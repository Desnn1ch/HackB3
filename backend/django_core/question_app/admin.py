from django.contrib import admin

from question_app.models import Question, QuestionOptions, UserAnswer


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    pass


@admin.register(QuestionOptions)
class QuestionOptionsAdmin(admin.ModelAdmin):
    pass


@admin.register(UserAnswer)
class UserAnswerAdmin(admin.ModelAdmin):
    pass

from django.contrib import admin

from block_app.models import Block, Test, TestQuestion, TestAttempt


@admin.register(Block)
class BlockAdmin(admin.ModelAdmin):
    pass


@admin.register(Test)
class TestAdmin(admin.ModelAdmin):
    pass


@admin.register(TestQuestion)
class TestQuestionAdmin(admin.ModelAdmin):
    pass


@admin.register(TestAttempt)
class TestAttemptAdmin(admin.ModelAdmin):
    pass

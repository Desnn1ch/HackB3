from django.urls import path, include
from rest_framework.routers import DefaultRouter

from question_app.views import UserAnswerView, UserAnswerAdminViewSet

router = DefaultRouter()
router.register(r'admin-user-answers', UserAnswerAdminViewSet, basename='admin-user-answers')
urlpatterns = [
    path('user-answers/<int:question_id>/', UserAnswerView.as_view(), name='user-answers'),
    path('user-answers/', UserAnswerView.as_view(), name='submit-answer'),
    path('', include(router.urls), name='admin-user-answers'),
]
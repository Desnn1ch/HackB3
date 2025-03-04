from django.urls import path
from rest_framework.routers import DefaultRouter

from block_app.views import (BlockReadOnlyViewSet, BlockAdminViewSet, StartTestAttemptAPIView,
                             SubmitAnswerAPIView,AcknowledgeBlockView)


router = DefaultRouter()
router.register("blocks", BlockReadOnlyViewSet, basename="blocks")
router.register(r'admin-blocks', BlockAdminViewSet, basename="admin-blocks")

urlpatterns = router.urls + [
    path("start-test/", StartTestAttemptAPIView.as_view(), name="start-test"),
    path("submit-answer/", SubmitAnswerAPIView.as_view(), name="submit-answer"),
    path("blocks/<int:id>/acknowledge", AcknowledgeBlockView.as_view(), name='acknowledge_block'),
    path("blocks/acknowledge", AcknowledgeBlockView.as_view(), name='get_acknowledged_blocks'),
]

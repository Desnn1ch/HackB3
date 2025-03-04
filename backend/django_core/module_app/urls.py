from rest_framework.routers import DefaultRouter

from module_app.views import ModuleReadOnlyViewSet, ModuleAdminViewSet

router = DefaultRouter()
router.register(r"modules", ModuleReadOnlyViewSet)

router.register(r"admin-modules", ModuleAdminViewSet, basename="admin-modules")

urlpatterns = router.urls

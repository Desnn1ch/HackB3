from rest_framework.routers import DefaultRouter

from cources_app.views import CourseViewSet, CourseAdminViewSet

router = DefaultRouter()
router.register("courses", CourseViewSet, "courses")

router.register("admin-courses", CourseAdminViewSet, "admin-courses")

urlpatterns = router.urls

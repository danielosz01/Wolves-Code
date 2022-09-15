""" Client Urls """
# Django
from django.urls import path, include

# Django Rest Framework
from rest_framework.routers import SimpleRouter

# Views
from .views import ClientViewSet, StatsViewSet, ProjectViewSet, ProjectIdeasViewSet

router = SimpleRouter()
router.register(r'clients', ClientViewSet, basename='client')
router.register(r'stats', StatsViewSet, basename='stats')
router.register(r'projects', ProjectViewSet, basename='project')
router.register(r'projectideas', ProjectIdeasViewSet, basename='projectideas')

urlpatterns = [
    path('', include(router.urls))
]

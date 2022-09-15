""" Team Urls """
# Django
from django.urls import path, include

# Django Rest Framework
from rest_framework.routers import SimpleRouter

# Views
from .views import TeamMemberViewSet

router = SimpleRouter()
router.register(r'team-members', TeamMemberViewSet, basename='team members')


urlpatterns = [
    path('', include(router.urls))
]
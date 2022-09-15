""" Social Media Urls """
# Django
from django.urls import path, include

# Django Rest Framework
from rest_framework.routers import SimpleRouter

# Views
from .views import SocialMediaViewSet

router = SimpleRouter()
router.register(r'social-media', SocialMediaViewSet, basename='social media')

urlpatterns = [
    path('', include(router.urls))
]

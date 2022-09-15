""" Colors Urls """
# Django
from django.urls import path, include

# Django Rest Framework
from rest_framework.routers import SimpleRouter

# Views
from .views import ColorViewSet

router = SimpleRouter()
router.register(r'colors', ColorViewSet, basename='color')

urlpatterns = [
    path('', include(router.urls))
]

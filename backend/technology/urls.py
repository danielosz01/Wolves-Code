""" Technology Urls"""
# Django
from django.urls import path, include

# Django Rest Framework
from rest_framework.routers import SimpleRouter

# Views
from .views import TechnologyViewSet

router = SimpleRouter()
router.register(r'technologies', TechnologyViewSet, basename="technology")

urlpatterns = [
    path('', include(router.urls))
]
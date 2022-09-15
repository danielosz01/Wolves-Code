""" WolfDiary Urls """
# Django
from django.urls import path, include

# Django Rest Framework
from rest_framework.routers import SimpleRouter

# Views
from .views import WolfPageViewSet

router = SimpleRouter()
router.register(r'wolf-diary', WolfPageViewSet, basename='wolf-diary')

urlpatterns = [
    path('', include(router.urls))
]
""" WolfDiary Urls """
# Django
from django.urls import path, include

# Django Rest Framework
from rest_framework.routers import SimpleRouter

# Views
from .views import ContactViewSet

router = SimpleRouter()
router.register(r'contact', ContactViewSet, basename='contact')

urlpatterns = [
    path('', include(router.urls))
]
""" Main URLS module."""
from django.urls import include, path
from django.contrib import admin
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

# My routers
from colors.urls import router as router_colors
from social_media.urls import router as router_social_media
from technology.urls import router as router_technology
from team.urls import router as router_team
from clients.urls import router as router_client
from wolfdiary.urls import router as router_wolf_diary
from contact.urls import router as router_contact


class MainRouter(DefaultRouter):
    """
        Extends `DefaultRouter` class to add a method for
        extending url routes from another router.
    """

    def extend(self, router):
        """
        Extend the routes with url routes of the passed in router.

        Args:
             router: SimpleRouter instance containing route definitions.
        """
        self.registry.extend(router.registry)


router = MainRouter()
router.extend(router_colors)
router.extend(router_social_media)
router.extend(router_technology)
router.extend(router_team)
router.extend(router_client)
router.extend(router_wolf_diary)
router.extend(router_contact)

urlpatterns = [
    # Django Admin
    path('admin/', admin.site.urls),


    path('api/v1/', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

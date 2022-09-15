from rest_framework.response import Response
from rest_framework import viewsets

from .models import SocialMedia
from .serializers import SocialMediaSerializer


class SocialMediaViewSet(viewsets.ViewSet):
    """
        A simple ViewSet for listing Social Medias
    """

    def list(self, request):
        queryset = SocialMedia.objects.all()
        serializers = SocialMediaSerializer(queryset, many=True)
        return Response(serializers.data)

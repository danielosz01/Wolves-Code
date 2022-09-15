from rest_framework.response import Response
from rest_framework import viewsets

from .models import Technology
from .serialiezers import TechnologySerializers


class TechnologyViewSet(viewsets.ViewSet):
    """
            A simple ViewSet for listing Technologies
    """

    def list(self, request):
        queryset = Technology.objects.all()
        serializers = TechnologySerializers(queryset, many=True)
        return Response(serializers.data)
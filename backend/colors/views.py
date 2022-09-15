from rest_framework.response import Response
from rest_framework import viewsets
# from rest_framework import status

from .models import Color
from .serializers import ColorSerializer


class ColorViewSet(viewsets.ViewSet):
    """
        A simple ViewSet for listing Colors
    """

    def list(self, request):
        queryset = Color.objects.all()
        serializers = ColorSerializer(queryset, many=True)
        return Response(serializers.data)

    def retrieve(self, request, pk):
        queryset = Color.objects.filter(pk=pk)
        serializers = ColorSerializer(queryset, many = True)
        return Response(serializers.data)

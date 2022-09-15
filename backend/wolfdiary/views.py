from rest_framework.response import Response
from rest_framework import viewsets

from .models import WolfPage
from .serializers import WolfPageSerializer, WolfDiarySerializer


class WolfPageViewSet(viewsets.ViewSet):
    """
                A simple ViewSet for listing WolfPages
    """

    def list(self, request):
        queryset = WolfPage.objects.all()
        serializers = WolfDiarySerializer(queryset, many=True)
        return Response(serializers.data)

    def retrieve(self, request, pk):
        queryset = WolfPage.objects.filter(pk=pk)
        serializers = WolfPageSerializer(queryset, many=True)
        return Response(serializers.data)


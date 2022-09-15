from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from .models import Client, Project, ProjectIdeas
from .serializers import ClientSerializer, StatsSerializers, ProjectSerializer, ProjectIdeasSerializer 


class ClientViewSet(viewsets.ReadOnlyModelViewSet):
    
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    lookup_field = 'slug'



class StatsViewSet(viewsets.ViewSet):
    """
                A simple ViewSet for listing Stats
        """
    def list(self, request):
        queryset = Project.objects.filter(is_development=False)
        serializers = StatsSerializers(queryset)
        return Response(serializers.data)


class ProjectViewSet(viewsets.ViewSet):

    def list(self, request):
        queryset = Project.objects.all()
        serializers = ProjectSerializer(queryset, many = True)
        return Response(serializers.data)

    def retrieve(self, request, pk=None):
        queryset = Project.objects.filter(pk=pk)
        serializers = ProjectSerializer(queryset, many = True)
        return Response(serializers.data)

    def partial_update(self, request,pk=None):
        queryset = Project.objects.all()
        instance = queryset.get(pk=pk)
        serializers = ProjectSerializer(instance,data=request.data, partial = True)
        serializers.is_valid(raise_exception=True)
        serializers.save()
        return Response(serializers.data)

class ProjectIdeasViewSet(viewsets.ViewSet):

    def list(self, request):
        queryset = ProjectIdeas.objects.all()
        serializers = ProjectIdeasSerializer(queryset, many=True)
        return Response(serializers.data)
    
    def retrieve(self, request,pk = None):
        queryset = ProjectIdeas.objects.filter(project=pk)
        serializer = ProjectIdeasSerializer(queryset, many =  True)
        return Response(serializer.data)

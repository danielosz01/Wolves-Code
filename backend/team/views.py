from rest_framework.response import Response
from rest_framework import viewsets

from .models import TeamMember
from .serializers import TeamMemberSerializer


class TeamMemberViewSet(viewsets.ViewSet):
    """
            A simple ViewSet for listing TeamMembers
    """

    def list(self, request):
        queryset = TeamMember.objects.all()
        serializers = TeamMemberSerializer(queryset, many=True)
        return Response(serializers.data)
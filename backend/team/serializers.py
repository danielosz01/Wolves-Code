from rest_framework import serializers
from .models import TeamMember, Position
from technology.serialiezers import TechnologySerializers
from main.settings import MEDIA_URL, MEDIA_SERVER

class PositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Position
        fields = "__all__"


class TeamMemberSerializer(serializers.ModelSerializer):
    position = PositionSerializer(many=True)
    technologies = TechnologySerializers(many=True)
    url_image = serializers.SerializerMethodField()

    def get_url_image(self, obj):
        return f'{MEDIA_SERVER}{MEDIA_URL}{obj.picture}'

    class Meta:
        model = TeamMember
        fields = ('pk', 'first_name', 'last_name', 'position', 'technologies', 'description', 'picture', 'url_image')

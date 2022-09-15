from rest_framework import serializers
from .models import WolfPage
from clients.serializers import ProjectSerializer
from main.settings import MEDIA_URL, MEDIA_SERVER

class WolfDiarySerializer(serializers.ModelSerializer):
    # project = ProjectSerializer()
    url_image = serializers.SerializerMethodField()

    def get_url_image(self, obj):
        return f'{MEDIA_SERVER}{MEDIA_URL}{obj.image}'

    class Meta:
        model = WolfPage
        # fields = ("id", "title", "content", "image", "project")
        fields = ("id", "title", "image", "url_image")


class WolfPageSerializer(serializers.ModelSerializer):
    project = ProjectSerializer()
    url_image = serializers.SerializerMethodField()

    def get_url_image(self, obj):
        return f'{MEDIA_SERVER}{MEDIA_URL}{obj.image}'


    class Meta:
        model = WolfPage
        fields = ("id", "title", "content", "image", "url_image", "project")

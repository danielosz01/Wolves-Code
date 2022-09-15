from rest_framework import serializers
from .models import SocialMedia
from main.settings import MEDIA_URL, MEDIA_SERVER

class SocialMediaSerializer(serializers.ModelSerializer):
        
    url_image = serializers.SerializerMethodField()

    def get_url_image(self, obj):
        return f'{MEDIA_SERVER}{MEDIA_URL}{obj.icon}'

    class Meta:
        model = SocialMedia
        fields = ('pk', 'name', 'url', 'icon', 'url_image')

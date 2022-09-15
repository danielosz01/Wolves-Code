from rest_framework import serializers
from .models import Technology
from main.settings import MEDIA_URL, MEDIA_SERVER

class TechnologySerializers(serializers.ModelSerializer):
    url_image = serializers.SerializerMethodField()

    def get_url_image(self, obj):
        return f'{MEDIA_SERVER}{MEDIA_URL}{obj.icon}'

    class Meta:
        model = Technology
        fields = ('pk', 'name', 'icon', 'url_image')

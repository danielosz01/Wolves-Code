from rest_framework import serializers
from .models import Color


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ('pk', 'name', 'code')

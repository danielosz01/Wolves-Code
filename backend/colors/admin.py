from django.contrib import admin
from .models import Color


@admin.register(Color)
class ColorAdmin(admin.ModelAdmin):
    list_display = ('name', 'code')
    icon_name = 'brush'
    search_fields = ('name__startswith',)

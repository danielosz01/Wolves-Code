from django.contrib import admin
from .models import SocialMedia


@admin.register(SocialMedia)
class SocialMediaAdmin(admin.ModelAdmin):
    list_display = ('name', 'url')
    search_fields = ('name__startswith',)
    icon_name = "camera"
from django.contrib import admin
from .models import WolfPage


@admin.register(WolfPage)
class WolfPageAdmin(admin.ModelAdmin):
    list_display = ('title', 'project')
    search_fields = ('title__startswith', 'project__startswith')
    icon_name = 'description'

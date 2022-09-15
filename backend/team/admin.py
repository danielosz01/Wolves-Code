from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import TeamMember, Position


@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    fieldsets = (
        *UserAdmin.fieldsets,  # original form fieldsets, expanded
        (
            'Background',  # group heading of your choice; set to None for a blank space instead of a header
            {
                'fields': (
                    'technologies',
                    'description',
                    'position',
                    'picture',
                ),
            },
        ),
    )

    list_display = ("username", "first_name", "last_name")
    list_filter = ('technologies', 'position')
    search_fields = ("first_name__startswith", "username__startswith")
    icon_name = 'face'


@admin.register(Position)
class PositionAdmin(admin.ModelAdmin):
    list_display = ('name', )
    icon_name = 'book'


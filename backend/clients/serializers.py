from rest_framework import serializers
from .models import Client, Project, ProjectIdeas
from technology.serialiezers import TechnologySerializers
from django.db.models import Sum, Avg
from main.settings import MEDIA_URL, MEDIA_SERVER

class ProjectSerializer(serializers.ModelSerializer):
    projectsTechnologies = TechnologySerializers(many=True)
    url_image = serializers.SerializerMethodField()

    def get_url_image(self, obj):
        return f'{MEDIA_SERVER}{MEDIA_URL}{obj.image}'

    class Meta:
        model = Project
        fields = ('id', 'name', 'description', 'image', 'score', 'work_hours', 'client_ideas', 'projectsTechnologies', 'url_image')


class ClientSerializer(serializers.HyperlinkedModelSerializer):
    projects = ProjectSerializer(many=True)
    url_image = serializers.SerializerMethodField()

    def get_url_image(self, obj):
        return f'{MEDIA_SERVER}{MEDIA_URL}{obj.image}'

    class Meta:
        model = Client
        fields = ['url', 'id', 'slug','name', 'business','staff_position', 'image', 'url_image','testimony', 'link', 'email', 'projects']
        lookup_field = 'slug'
        extra_kwargs = {
            'url': {'lookup_field' : 'slug'}
        }


class StatsSerializers(serializers.ModelSerializer):
    total_hours = serializers.SerializerMethodField()
    total_jobs = serializers.SerializerMethodField()
    total_score = serializers.SerializerMethodField()
    total_clients = serializers.SerializerMethodField()

    class Meta:
        model = Client
        fields = ('total_hours',
                  'total_jobs',
                  'total_score',
                  'total_clients'
                  )

    def get_total_hours(self, obj):
        return sum([item.work_hours for item in obj])

    def get_total_score(self, obj):
        avg = obj.aggregate(Avg('score'))
        return avg['score__avg']

    def get_total_jobs(self, obj):
        count = obj.count()
        return count

    def get_total_clients(self, obj):
        count = []
        data = [item.client.id for item in obj]
        for item in data:
            if item not in count:
                count.append(item)
        return len(count)

class ProjectIdeasSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProjectIdeas
        fields = ( 'project', 'idea',)



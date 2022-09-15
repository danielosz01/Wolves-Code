from django.db import models
from django.utils.text import slugify
from technology.models import Technology
from django.core.validators import FileExtensionValidator


class Client(models.Model):
    name = models.CharField(max_length=30)
    business = models.CharField(max_length=30, blank=True)
    staff_position = models.CharField(max_length=30, blank=True)
    testimony = models.TextField(blank=True)
    link = models.URLField(blank=True)
    email = models.EmailField()
    slug = models.SlugField(max_length = 60, unique = True, blank = True) 
    image = models.FileField(upload_to='client/', blank=True, validators=[FileExtensionValidator(['jpg', 'png', 'svg'])])

    class Meta:
        verbose_name = "Client"
        verbose_name_plural = "Clients"

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):

        self.slug = slugify(self.email)
        super(Client, self).save(*args, **kwargs)


class Project(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()
    score = models.FloatField(default = 0)
    work_hours = models.FloatField(default = 0)
    projectsTechnologies = models.ManyToManyField(Technology, related_name='projectsTechnologies')
    client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='projects')
    is_development = models.BooleanField(default=True)
    client_ideas = models.TextField(blank = True)
    image = models.FileField(upload_to='projects/', blank=True, validators=[FileExtensionValidator(['png', 'jpg', 'svg'])])

    class Meta:
        verbose_name = "Project"
        verbose_name_plural = "Projects"

    def __str__(self):
        return self.name

class ProjectIdeas(models.Model):
    idea = models.CharField(max_length=250)
    project = models.ForeignKey(Project, on_delete = models.CASCADE, related_name='projectIdea')



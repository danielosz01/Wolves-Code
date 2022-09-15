from django.contrib.auth.models import AbstractUser
from django.db import models
from technology.models import Technology
from django.core.validators import FileExtensionValidator


class Position(models.Model):
    name = models.CharField(max_length=30)

    class Meta:
        verbose_name = "Position"
        verbose_name_plural = "Positions"

    def __str__(self):
        return self.name


class TeamMember(AbstractUser):
    picture = models.FileField(blank=True, upload_to='teamMember/',validators=[FileExtensionValidator(['png', 'jpg', 'svg'])])
    technologies = models.ManyToManyField(Technology, related_name='technologies')
    description = models.TextField()
    position = models.ManyToManyField(Position, related_name='position')

    class Meta:
        verbose_name = "TeamMember"
        verbose_name_plural = "TeamMembers"

    def __str__(self):
        return self.first_name + ' ' + self.last_name

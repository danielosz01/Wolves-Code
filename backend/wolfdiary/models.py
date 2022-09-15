from django.db import models
from clients.models import Project
from django.core.validators import FileExtensionValidator


class WolfPage(models.Model):
    title = models.CharField(max_length=30)
    content = models.TextField()
    image = models.FileField(upload_to="wolf-diary",validators=[FileExtensionValidator(['png', 'jpg', 'svg'])])
    project = models.OneToOneField(Project, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "WolfPage"
        verbose_name_plural = "WolfPages"

    def __str__(self):
        return self.title

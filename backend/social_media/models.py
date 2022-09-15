from django.db import models
from django.core.validators import FileExtensionValidator


class SocialMedia(models.Model):
    name = models.CharField(max_length=15)
    url = models.URLField()
    icon = models.FileField(upload_to='social_media/', validators=[FileExtensionValidator(['png', 'jpg', 'svg'])])

    class Meta:
        verbose_name = "Social Media"
        verbose_name_plural = "Social Medias"

    def __str__(self):
        return self.name

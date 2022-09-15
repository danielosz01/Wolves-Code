from django.db import models
from django.db.models import CharField


class Color(models.Model):
    name: CharField = models.CharField(max_length=15)
    code = models.CharField(max_length=10)

    class Meta:
        verbose_name = "Color"
        verbose_name_plural = "Colors"

    def __str__(self):
        return self.name


from django.db import models
from django.core.validators import FileExtensionValidator


class Technology(models.Model):
    name = models.CharField(max_length=30)
    icon = models.FileField(upload_to='technologies/',validators=[FileExtensionValidator(['pdf', 'doc', 'svg'])])

    class Meta:
        verbose_name = "Technology"
        verbose_name_plural = "Technologies"

    def __str__(self):
        return self.name

# Generated by Django 3.1.6 on 2021-03-02 03:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0005_client_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='slug',
            field=models.SlugField(max_length=60, unique=True),
        ),
    ]
# Generated by Django 3.1.6 on 2021-02-16 04:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('social_media', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='socialmedia',
            name='icon',
            field=models.ImageField(upload_to='media/social_media/'),
        ),
    ]

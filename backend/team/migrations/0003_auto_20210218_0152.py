# Generated by Django 3.1.6 on 2021-02-18 01:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('team', '0002_auto_20210218_0149'),
    ]

    operations = [
        migrations.AlterField(
            model_name='teammember',
            name='picture',
            field=models.ImageField(blank=True, upload_to='media/teamMember/'),
        ),
    ]

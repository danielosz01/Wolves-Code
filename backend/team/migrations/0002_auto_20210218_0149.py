# Generated by Django 3.1.6 on 2021-02-18 01:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('technology', '0001_initial'),
        ('team', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='teammember',
            name='picture',
            field=models.ImageField(blank=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='teammember',
            name='position',
            field=models.ManyToManyField(related_name='position', to='team.Position'),
        ),
        migrations.AlterField(
            model_name='teammember',
            name='technologies',
            field=models.ManyToManyField(related_name='technologies', to='technology.Technology'),
        ),
    ]

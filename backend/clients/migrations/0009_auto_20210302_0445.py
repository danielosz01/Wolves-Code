# Generated by Django 3.1.6 on 2021-03-02 04:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0008_auto_20210302_0401'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='client_ideas',
            field=models.TextField(blank=True),
        ),
        migrations.CreateModel(
            name='ProjectIdeas',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('idea', models.CharField(max_length=250)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='projectIdea', to='clients.project')),
            ],
        ),
    ]

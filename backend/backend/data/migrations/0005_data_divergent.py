# Generated by Django 2.2.1 on 2019-06-04 08:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0004_note'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='divergent_data',
            field=models.BooleanField(default=False),
        ),
    ]

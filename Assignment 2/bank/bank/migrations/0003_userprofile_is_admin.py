# Generated by Django 4.2.2 on 2023-06-18 10:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bank', '0002_transaction'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='is_admin',
            field=models.BooleanField(default=False),
        ),
    ]

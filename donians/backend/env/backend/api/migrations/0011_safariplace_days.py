# Generated by Django 5.1.6 on 2025-02-19 08:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_alter_safariplace_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='safariplace',
            name='days',
            field=models.IntegerField(blank=True, help_text='number of days of the tour', null=True),
        ),
    ]

# Generated by Django 5.1.6 on 2025-02-22 06:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_alter_safariplace_days'),
    ]

    operations = [
        migrations.AddField(
            model_name='safariplace',
            name='comfort_level',
            field=models.CharField(blank=True, choices=[('Luxury+', 'Luxury+'), ('Luxury', 'Luxury'), ('Mid-range', 'Mid-range'), ('Budget', 'Budget')], help_text='level of comfort of safari', max_length=150, null=True),
        ),
        migrations.AddField(
            model_name='safariplace',
            name='private_share_tour',
            field=models.CharField(blank=True, choices=[('Private', 'Private'), ('Shared', 'Shared')], help_text='private or shared tour', max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='safariplace',
            name='safari_type',
            field=models.CharField(blank=True, choices=[('Lodge,tented camp', 'Lodge,tented camp'), ('hotel', 'hotel'), ('Camping', 'Camping')], help_text='type of the safari place', max_length=255, null=True),
        ),
    ]

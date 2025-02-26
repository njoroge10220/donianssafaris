# Generated by Django 5.1.6 on 2025-02-17 16:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_rename_areas_to_visit_safariplace_areas_to_visit_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='safariplace',
            name='safari_type',
            field=models.CharField(blank=True, choices=[('Lodge,tented camp or hotel', 'Lodge,tented camp or hotel'), ('Camping', 'Camping')], help_text='type of the safari place', max_length=255, null=True),
        ),
    ]

# Generated by Django 5.1.6 on 2025-02-18 10:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_alter_safariplace_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='safariplace',
            name='price',
            field=models.IntegerField(blank=True, choices=[(15000, '15,000'), (18000, '18,000'), (20000, '20,000'), (23000, '23,000'), (25000, '25,000'), (27000, '27,000'), (30000, '30,000')], null=True),
        ),
    ]

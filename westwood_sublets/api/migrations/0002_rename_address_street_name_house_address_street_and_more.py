# Generated by Django 4.0.4 on 2022-06-18 00:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='house',
            old_name='address_street_name',
            new_name='address_street',
        ),
        migrations.RenameField(
            model_name='house',
            old_name='address_zip_code',
            new_name='address_zip',
        ),
        migrations.RemoveField(
            model_name='house',
            name='address_house_numer',
        ),
    ]

# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2017-03-07 00:26
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dtm', '0006_auto_20170306_1915'),
    ]

    operations = [
        migrations.AlterField(
            model_name='availabilityshare',
            name='duration',
            field=models.DurationField(default=datetime.timedelta(0, 1800), null=True),
        ),
    ]

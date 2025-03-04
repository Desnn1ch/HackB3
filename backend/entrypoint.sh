#!/usr/bin/env bash

python django_core/manage.py makemigrations --noinput
python django_core/manage.py migrate --noinput
python django_core/manage.py runserver 0.0.0.0:8000

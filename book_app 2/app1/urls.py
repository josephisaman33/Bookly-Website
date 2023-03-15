# -*- coding: utf-8 -*-

from django.contrib import admin
from django.urls import path, re_path, include
from app1 import views

app_name = 'app1'
urlpatterns = [

    re_path(r'^reviews/', views.reviews, name='reviews'),

]


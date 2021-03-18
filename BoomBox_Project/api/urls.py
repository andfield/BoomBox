# file to sotre all the urls

from django.urls import path
from .views import main

urlpatterns = [
    path('', main)
]
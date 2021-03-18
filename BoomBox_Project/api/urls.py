# file to sotre all the urls

from django.urls import path
from .views import RoomView

urlpatterns = [
    path('', RoomView.as_view())
]
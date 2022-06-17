from django.urls import path
from .views import CreateHouseView, ListHouseView

urlpatterns = [
    path('', ListHouseView.as_view()),
    path('create/', CreateHouseView.as_view())
]
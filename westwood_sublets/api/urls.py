from django.urls import path
from .views import CreateHouseView, GetListings, ListHouseView

urlpatterns = [
    path('', ListHouseView.as_view()),
    path('create', CreateHouseView.as_view()),
    path('get-listings', GetListings.as_view())
]
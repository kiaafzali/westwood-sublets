from django.shortcuts import render
from rest_framework import generics
from .serializers import HouseSerializer
from .models import House



class ListHouseView(generics.ListAPIView):
    queryset = House.objects.all()
    serializer_class = HouseSerializer

class CreateHouseView(generics.CreateAPIView):
    queryset = House.objects.all()
    serializer_class = HouseSerializer
    


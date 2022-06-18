from telnetlib import STATUS
from django.shortcuts import render
from rest_framework import generics, status
from .serializers import HouseSerializer
from .models import House
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
import json






class ListHouseView(generics.ListAPIView):
    queryset = House.objects.all()
    serializer_class = HouseSerializer

class CreateHouseView(generics.CreateAPIView):
    queryset = House.objects.all()
    serializer_class = HouseSerializer

class GetListings(APIView):
    def get(self, request, format = None):
        listings = House.objects.all()
        returned_list = []
        for listing in listings:
            item = {
                'code' : listing.code,
                'price' : listing.price,
                'owner' : listing.owner,
                'address' : listing.address_street + ", " + listing.address_city + ", " + listing.address_state + " " + listing.address_zip,
#                'created_at' : listing.created_at,
            }
            returned_list.append(item)
        print(returned_list)
        return Response(returned_list, status=status.HTTP_200_OK)

            

    


import code
from datetime import datetime
from telnetlib import STATUS
from django.shortcuts import render
from rest_framework import generics, status
from .serializers import HouseSerializer
from .models import House
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from .util import *




class ListHouseView(generics.ListAPIView):
    queryset = House.objects.all()
    serializer_class = HouseSerializer

class CreateHouseView(generics.CreateAPIView):
    queryset = House.objects.all()
    serializer_class = HouseSerializer

class GetListings(APIView):
    def get(self, request, format = None):
        db_listings = House.objects.all()
        returned_listings = []
        for listing in db_listings:
            created_at = normalizeDate(listing.created_at)
            item = {
                'code' : listing.code,
                'price' : listing.price,
                'owner' : listing.owner,
                'address' : listing.address_street + ", " + listing.address_city + ", " + listing.address_state + " " + listing.address_zip,
                'created_at' : created_at,
            }
            returned_listings.append(item)

        #Sorting Filter
        returned_listings.sort(key=lambda x:x['price'])

        #Rreturn Listings
        print(returned_listings)
        return Response(returned_listings, status=status.HTTP_200_OK)

            

    


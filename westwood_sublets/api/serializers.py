from rest_framework import serializers
from .models import House

class HouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = House
        fields = ('id', 'code', 'owner', 'address_house_numer', 'address_street_name', 'address_city', 'address_state', 'address_zip_code', 'price', 'created_at')

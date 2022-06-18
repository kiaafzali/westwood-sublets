from rest_framework import serializers
from .models import House

class HouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = House
        fields = ('id', 'code', 'owner', 'address_street', 'address_city', 'address_state', 'address_zip', 'price', 'created_at')

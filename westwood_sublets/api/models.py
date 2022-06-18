from unittest.util import _MAX_LENGTH
from django.db import models
import string
import random

def generate_unique_code():
    length = 10
    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if House.objects.filter(code=code).count() == 0:
            break
    return code
    
    
        

# Create your models here.
class House(models.Model):
    code = models.CharField(max_length=10, default="", unique=True)
    owner = models.CharField(max_length=50, unique=True)
    address_street = models.CharField(max_length=50)
    address_city = models.CharField(null=False, max_length=20, default="Los Angeles")
    address_state = models.CharField(null=False, max_length=2, default="CA")
    address_zip = models.CharField(null=False, max_length=5, default="90024")
    price = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)



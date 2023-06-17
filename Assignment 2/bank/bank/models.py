from django.db import models
from django.contrib.auth.hashers import make_password

#make a user with the fields username, password, email, balance
class UserProfile(models.Model):
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=128)
    email = models.CharField(max_length=50)
    balance = models.FloatField(default=0)
    
    password = make_password(str(password))
    
    def __str__(self):
        return self.username
    
   



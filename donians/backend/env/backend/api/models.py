
from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator 

# Create your models here.

#logo
class Logo(models.Model):
    logo_Img = models.ImageField(upload_to="./api/media/images/logo", blank=True, null=True )
    uploaded_at = models.DateTimeField(auto_now_add=True) 
    
    def __str__(self):
        return f'Logo:{self.logo_Img}'   


#place
class SafariPlace(models.Model):
    name = models.CharField(max_length=255, help_text='name of the safari place', blank=True, null=True)
    image = models.ImageField(upload_to="./api/media/images/safaris/Places", blank=True, null=True)
    pricing = [
       (500,'500'),
       (750,'750'),
       (1000,'1,000'),
       (1250,'1,250'),
       (1500,'1,500'),
       (1750,'1,750'),
       (2000,'2,000'),
       (2250,'2,250'),
       (2500,'2,500'),
       (2750,'2,750'),
       (3000,'3,000'),
    ]
    price = models.IntegerField( choices=pricing ,blank=True, null=True)
    county = models.CharField(max_length=150, help_text='local county of the safari place', blank=True, null=True)
    rate = [
       (i, str(i)) for i in range(1,6)
    ]
    rating = models.IntegerField(default=1, choices=rate, blank=True, null=True)
    areas_to_visit = models.TextField(help_text='the areas in the safari to be visited', blank=True, null=True)
    numOfDays = [
       (i, str(i)) for i in range(1,11)
    ]
    days = models.IntegerField(help_text='number of days of the tour', choices=numOfDays, blank=True, null=True)
    SAFARI_TYPE = [
        ('Lodge,tented camp', 'Lodge,tented camp' ),
        ('hotel', 'hotel'),
        ('Camping', 'Camping'),
    ]
    
    safari_type = models.CharField(max_length=255, choices=SAFARI_TYPE,  help_text='type of the safari place', blank=True, null=True)
    COMFORT = [
        ('Luxury+','Luxury+'),
        ('Luxury','Luxury'),
        ('Mid-range','Mid-range'),
        ('Budget','Budget'),
    ]    
    comfort_level = models.CharField(max_length=150, choices=COMFORT,  help_text='level of comfort of safari', blank=True, null=True)
    PRIV_SHARE = [
        ('Private','Private'),
        ('Shared','Shared'),
    ]
    private_share_tour = models.CharField(max_length=150, choices=PRIV_SHARE,  help_text='private or shared tour', blank=True, null=True)
    is_favourite = models.BooleanField(default=False, blank=True, null=True)
    

    def __str__(self):
        return f'Name:{self.name}'
    

#safari questions
class Question(models.Model):
    question = models.CharField(max_length=255, help_text='safari question', blank=True,null=True)
    answer = models.TextField(help_text='safari answer', blank=True,null=True)


#review 
class Review(models.Model):
    name = models.CharField(max_length=200, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    feedback = models.TextField(blank=True, null=True)
    rating = models.IntegerField(blank=True, null=True)
    uploaded_at = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return f'Name-{self.name}'

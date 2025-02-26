

from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Logo, SafariPlace, Question,Review

#Logo serialiser
class LogoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Logo
        fields = ['id', 'logo_Img', 'uploaded_at']
        
  
#SafariPlace serialiser
class SafariPlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = SafariPlace
        fields = [
            'id','name','image','price','county',
            'private_share_tour','rating',
            'areas_to_visit', 'days', 'comfort_level',
            'safari_type','is_favourite',
        ]
   
#question serialiser
class QuestionSerializer(serializers.ModelSerializer):
        class Meta:
            model = Question
            fields = [
                "id",
                "question",
                "answer",
            ]
            
#review serialiser
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = [
            'id', 'name', 'email', 'feedback', 'rating','uploaded_at' 
        ]
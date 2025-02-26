
from django.shortcuts import render

from rest_framework import generics
from rest_framework.permissions import AllowAny

from .models import Logo, SafariPlace, Question, Review
from .serializers import LogoSerializer, SafariPlaceSerializer,QuestionSerializer, ReviewSerializer

# Create your views here.

#Logo view
class LogoView(generics.ListCreateAPIView):
    queryset = Logo.objects.all()
    serializer_class = LogoSerializer
    permission_classes = [AllowAny]

#SafariPlaceViews
class SafariPlaceView(generics.ListCreateAPIView):
    queryset = SafariPlace.objects.all()
    serializer_class = SafariPlaceSerializer
    permission_classes = [AllowAny]
    
class SafariPlaceDeleteView(generics.DestroyAPIView):
    queryset = SafariPlace.objects.all()
    serializer_class = SafariPlaceSerializer
    permission_classes = [AllowAny]
    
    
#QuestionViews
class QuestionView(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [AllowAny]
    
class QuestionDeleteView(generics.DestroyAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [AllowAny]
    

#Reviews
class ReviewView(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [AllowAny]
    
class ReviewDeleteView(generics.DestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [AllowAny]

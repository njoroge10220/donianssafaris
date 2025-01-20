
from django.shortcuts import render

from rest_framework import generics
from rest_framework.permissions import AllowAny

from .models import Logo, Image,Event,AboutUs,Faq,Contact,Partner,Charity,FocusArea
from .serializers import LogoSerializer, ImageSerializer,EventSerializer,AboutUsSerializer,FaqSerializer,ContactSerializer,PartnerSerializer,CharitySerializer,FocusAreaSerializer

# Create your views here.

#Contact view
class ContactView(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [AllowAny]
    
#Contact Deleteview    
class ContactDeleteView(generics.DestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [AllowAny]

#Logo view
class LogoView(generics.ListCreateAPIView):
    queryset = Logo.objects.all()
    serializer_class = LogoSerializer
    permission_classes = [AllowAny]

#Image View
class ImageView(generics.ListCreateAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    permission_classes = [AllowAny]

#Image DeleteView
class ImageDeleteView(generics.DestroyAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    permission_classes = [AllowAny]

#Event View
class EventView(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [AllowAny]
 
 #Event DeleteView
class EventDeleteView(generics.DestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [AllowAny] 
      
#AboutUs View
class AboutUsView(generics.ListCreateAPIView):
    queryset = AboutUs.objects.all()
    serializer_class = AboutUsSerializer
    permission_classes = [AllowAny]

#Faq View
class FaqView(generics.ListCreateAPIView):
    queryset = Faq.objects.all()
    serializer_class = FaqSerializer
    permission_classes = [AllowAny]
    
#Partner view
class PartnerView(generics.ListCreateAPIView):
    queryset = Partner.objects.all()
    serializer_class = PartnerSerializer
    permission_classes = [AllowAny]
    
#Partner Deleteview   
class PartnerDeleteView(generics.DestroyAPIView):
    queryset = Partner.objects.all()
    serializer_class = PartnerSerializer
    permission_classes = [AllowAny]

#Charity view
class CharityView(generics.ListCreateAPIView):
    queryset = Charity.objects.all()
    serializer_class = CharitySerializer
    permission_classes = [AllowAny]

#FocusArea view
class FocusAreaView(generics.ListCreateAPIView):
    queryset = FocusArea.objects.all()
    serializer_class = FocusAreaSerializer
    permission_classes = [AllowAny]


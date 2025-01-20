
from rest_framework import serializers
from .models import Logo, Image,Event,AboutUs,Faq,Contact,Partner,Charity,FocusArea

#Logo serializer
class LogoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Logo
        fields = ['id','logo_Img' , 'uploaded_at']
        
#Image serializer
class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'image', 'uploaded_at']
 
#Event serializer
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'title', 'image', 'date', 'time', 'description' ]
#AboutUs serializer
class AboutUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUs
        fields = ['id', 'name', 'mission', 
                  'vision', 'story', 'what_we_do', 'core_values', 'call_for_action' ]
#Faq serializer
class FaqSerializer(serializers.ModelSerializer):
    class Meta:
        model = Faq
        fields = ['id', 'question', 'answer', 'uploaded_at']
        
#Contact serializer
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'email', 'website', 'phone', 'created_at']

#Partner serializer
class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = ['id', 'name', 'partner_type', 
                  'email', 'phone', 'website', 'logo', 'description']

#Charity serializer
class CharitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Charity
        fields = [
            'id', 'donor_name', 'donor_email', 'donation_ammount', 
            'volunteer_name', 'volunteer_email', 'volunteer_hours', 
            'advocate_name', 'advocate_email', 'advocacy_message', 
            'gift_name', 'gift_value', 'gift_description', 
            'fundraiser_name', 'fundraiser_email', 
            'fundraised_ammount', 'date_registered' ]

#FocusArea serializer
class FocusAreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = FocusArea
        fields = ['id', 'name', 'description', 'isActive', 'created_at', 'updated_at' ]


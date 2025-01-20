
from django.urls import path 
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('logo/', views.LogoView.as_view(), name='logo'), 
    path('image/', views.ImageView.as_view(), name='image'),  
    path('image-delete/<int:pk>/', views.ImageDeleteView.as_view(), name='image-delete'),  
    path('event/', views.EventView.as_view(), name='event'),
    path('event-delete/<int:pk>/', views.EventDeleteView.as_view(), name='event-delete'),       
    path('faqs/', views.FaqView.as_view(), name='faqs'),   
    path('about-us/', views.AboutUsView.as_view(), name='about-us'),
    path('contact/', views.ContactView.as_view(), name='contact'),
    path('contact-delete/<int:pk>/', views.ContactDeleteView.as_view(), name='contact-delete'),      
    path('partner/', views.PartnerView.as_view(), name='partner'),  
    path('partner-delete/<int:pk>/', views.PartnerDeleteView.as_view(), name='partner-delete'),    
    path('charity/', views.CharityView.as_view(), name='charity'),   
    path('focus-area/', views.FocusAreaView.as_view(), name='focus-area'),   
       
     
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)


from django.urls import path 
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('logo/', views.LogoView.as_view(), name='logo'), 
    path('safariPlace/', views.SafariPlaceView.as_view(), name='safariPlace'), 
    path('safariPlace-delete/<int:pk>/', views.SafariPlaceDeleteView.as_view(), name='safariPlace-delete'),    
    path('question/', views.QuestionView.as_view(), name='question'), 
    path('question-delete/<int:pk>/', views.QuestionDeleteView.as_view(), name='question-delete'), 
    path('review/', views.ReviewView.as_view(), name='review'), 
    path('review-delete/<int:pk>/', views.ReviewDeleteView.as_view(), name='review-delete'), 
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)

from django.db import models


# Create your models here.

#contact 
class Contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    website = models.URLField()
    phone = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'name{self.name}, email{self.email}, website{self.website}, phone{self.phone}, created_at{self.created_at}'
    
# logo 
class Logo(models.Model):
    logo_Img = models.ImageField(upload_to='./api/media/images/logo')
    uploaded_at = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return f'Logo:{self.logo_Img}'

# local-images
class Image(models.Model):
    image = models.ImageField(upload_to='./api/media/images/local')
    uploaded_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'image:{self.image}'
 
#events
class Event(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='./api/media/images/events')
    date = models.DateField(blank=True)
    time = models.TimeField(blank=True)
    description = models.TextField(blank=True)
    
    def __str__(self):
        return f'title:{self.title} image:{self.image} date:{self.date} time:{self.time} description:{self.description} '

# about-us 
class AboutUs(models.Model):
    name = models.CharField(max_length=200)
    mission = models.TextField(blank=True)
    vision = models.TextField(blank=True)
    story = models.TextField(blank=True)
    what_we_do = models.TextField(blank=True)
    core_values = models.TextField(blank=True)   
    call_for_action = models.TextField(blank=True) # invite visitors to donate and voluteer or learn more on getting involved
    
    def save(self, *args, **kwargs):
        if not self.pk and AboutUs.objects.exists():
            raise ValueError('There can only be one instance of the about us in the database')
        return super(AboutUs, self).save(*args, **kwargs)
    
    def __str__(self):
        return f'name{self.name} mission{self.mission} vision{self.vision} story{self.story} what-we-do{self.What_We_Do} core-values{self.Core_values} call-for-action{self.Call_for_action}'
   
    
# partners  & how to partner with us
class Partner(models.Model):
    PARTNER_TYPES = [
        ('ngo', 'NGO'),
        ('corporation', 'Corporation'),
        ('government', 'Government Agency'),
        ('individual', 'Individual'),
    ]
    
    name = models.CharField(max_length=255)
    partner_type = models.CharField(max_length=30, choices=PARTNER_TYPES)
    email = models.EmailField(blank=True)
    phone = models.IntegerField(blank=True)
    website = models.URLField(blank=True) 
    logo = models.ImageField(upload_to='./api/media/images/partners', help_text='can be image or logo of the partner') #can be logo or image
    description = models.TextField(blank=True)
    
    def __str__(self):
        return f'name{self.name}  partner_type{self.partner_type}  email{self.email} phone{self.phone}  website{self.website}  logo{self.logo} description{self.description}'   


# gifts donors volunteer advocate for kids
class Charity(models.Model):
    #fields related to donors
    donor_name = models.CharField(max_length=255, blank=True)
    donor_email = models.EmailField() 
    donation_ammount = models.DecimalField(max_digits=10, decimal_places=2, blank=True)   

    #fields related to volunteers
    volunteer_name = models.CharField(max_length=255, blank=True)
    volunteer_email = models.EmailField()
    volunteer_hours = models.IntegerField(blank=True)

    #fields related to advocates
    advocate_name = models.CharField(max_length=255, blank=True)
    advocate_email = models.EmailField()
    advocacy_message = models.TextField(blank=True)

    #fields related to gifts
    gift_name = models.CharField(max_length=255, blank=True)
    gift_value = models.DecimalField(max_digits=10, decimal_places=2, blank=True)
    gift_description = models.TextField(blank=True)

    #fields related to fundraisers
    fundraiser_name = models.CharField(max_length=255, blank=True)
    fundraiser_email = models.EmailField()
    fundraised_ammount = models.DecimalField(max_digits=10, decimal_places=2, blank=True)   
        
    
    #date of registration(when the charity was recieved)
    date_registered = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'donor-name {self.donor_name}'


# faqs
class Faq(models.Model):
    question = models.TextField(blank=True)
    answer = models.TextField(blank=True)
    uploaded_at = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return f'question{self.question} answer{self.answer}'
        

# areas of touch(hunger, porverty, health, climate crisis, education, )
class FocusArea(models.Model):
    name = models.CharField(max_length=150, unique=True)
    description = models.TextField(blank=True)
    isActive = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f'name{self.name}  description{self.description}  isActive{self.isActive} created_at{self.created_at} uploaded_at{self.updated_at} '


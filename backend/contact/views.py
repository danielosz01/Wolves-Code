from rest_framework.response import Response
from rest_framework import viewsets, status
from django.core.mail import send_mail
from main.settings import EMAIL_HOST_USER, EMAIL_LIST

from .models import Contact
from .serializers import ContactSerializer


class ContactViewSet(viewsets.ViewSet):
    """
        A simple ViewSet for send emails
    """

    def create(self, request):
        serializer = ContactSerializer(data=request.data)

        if serializer.is_valid():
            contact = Contact(**serializer.validated_data)
            contact.save()
            mail_message = f"Name: {contact.name} \nEmail: {contact.email}\nSubject: {contact.subject}\nMessage: {contact.message}"
            send_mail(
                subject='Confirmation mail',
                message='We received your message, we will contact you as soon as possible',
                from_email=EMAIL_HOST_USER,
                recipient_list=[contact.email],
                fail_silently=False
            )
            send_mail(
                subject='New Client',
                message=mail_message,
                from_email=EMAIL_HOST_USER,
                recipient_list=EMAIL_LIST,
                fail_silently=False
            )

            return Response(
                serializer.validated_data, status=status.HTTP_201_CREATED
            )

        return Response({
            'status': 'Bad request',
            'message': 'email could not be created with received data.'
        }, status=status.HTTP_400_BAD_REQUEST)

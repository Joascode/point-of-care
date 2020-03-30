from django.shortcuts import render
from rest_framework import viewsets
from .models import Data, CustomUser, Note
from .serializers import DataSerializer, UserSerializer, NoteSerializer


class DataViewSet(viewsets.ModelViewSet):
    serializer_class = DataSerializer

    def get_queryset(self):
        """
        Method used to obtain the queryset. If the request made to this view contains a query param 
        with 'user', it will use that param to filter the queryset accordingly. 
        """
        queryset = Data.objects.all().order_by('id')
        userId = self.request.query_params.get('user', None)
        if userId is not None:
            return queryset.filter(user__id=userId)
        return queryset


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer

    def get_queryset(self):
        # Custom queryset filtering to obtain all patient belonging to a midwife
        queryset = CustomUser.objects.all()
        midwife = self.request.query_params.get('midwife', None)
        if midwife is not None:
            return queryset.filter(midwife=midwife)
        return queryset


class NoteViewSet(viewsets.ModelViewSet):
    serializer_class = NoteSerializer

    def get_queryset(self):
        queryset = Note.objects.all()
        patientId = self.request.query_params.get('patientId', None)
        if patientId is not None:
            return queryset.filter(patient=patientId)
        return queryset

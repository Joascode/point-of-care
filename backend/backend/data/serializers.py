from rest_framework import serializers
from .models import Data, CustomUser, Note
from django.contrib.auth.hashers import make_password

# from django.contrib.auth.models import User

"""
    Serializers allow complex data such as querysets and model instances to be
    converted to native Python datatypes that can then be easily rendered into
    JSON, XML or other content types.
"""


class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Data
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        required=True,
        style={'input_type': 'password', 'placeholder': 'Password'}
    )

    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'password', 'email',
                  'is_patient', 'creation_date', 'midwife', 'first_name', 'last_name', 'divergent_data')

    def create(self, validated_data):
        validated_data['password'] = make_password(
            validated_data.get('password'))
        return super(UserSerializer, self).create(validated_data)


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ('id', 'text', 'patient', 'midwife', 'creation_date')

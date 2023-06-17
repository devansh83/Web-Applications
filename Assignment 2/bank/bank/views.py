from .models import UserProfile
from  django.http import JsonResponse
from .serializers import UserProfileSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def UserProfileList(request):
    
    if request.method == 'GET':
        Users  = UserProfile.objects.all()
        serializer = UserProfileSerializer(Users, many=True)
        return Response(serializer.data)
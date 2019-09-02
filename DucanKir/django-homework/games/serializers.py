from rest_framework  import serializers
from jwt_auth.serializers import UserSerializer

from .models import Game

class GameSerializer(serializers.ModelSerializer):

    user = UserSerializer(read_only=True)

    class Meta:
        model = Game
        fields = ('id', 'title', 'genre', 'year', 'image', 'user',)

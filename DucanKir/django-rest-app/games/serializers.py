from rest_framework import serializers
from .models import Genre, Players, Game

class NestedPlayersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Players
        fields = ('id', 'number_of_players',)

class NestedGameSerializer(serializers.ModelSerializer):

    class Meta:
        model = Game
        fields = ('id', 'title', 'players', 'image',)

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ('id', 'name',)


class PlayersSerializer(serializers.ModelSerializer):

    games = NestedGameSerializer(many=True)

    class Meta:
        model = Players
        fields = ('id', 'number_of_players', 'games',)

class GameSerializer(serializers.ModelSerializer):

    players = NestedPlayersSerializer()# populate
    genres = GenreSerializer(many=True)

    class Meta:
        model = Game
        fields = ('id', 'title', 'players', 'image', 'genres')

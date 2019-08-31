from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT

from .models import Players, Game
from .serializers import PlayersSerializer, GameSerializer

# Create your views here.
class GameListView(APIView):

    def get(self, _request):
        games = Game.objects.all() #get all games
        serializer = GameSerializer(games, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = GameSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)

        return Response(serializer.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)


class GameDetailView(APIView):

    def get(self, _request, pk):
        game = Game.objects.get(pk=pk)
        serializer = GameSerializer(game)
        return Response(serializer.data)

    def put(self, request, pk):
        game = Game.objects.get(pk=pk)
        serializer = GameSerializer(game, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, _request, pk):
        game = Game.objects.get(pk=pk)
        game.delete()

        return Response(status=HTTP_204_NO_CONTENT)

class PlayersListView(APIView):

    def get(self, _request):
        playerss = Players.objects.all() #get all playerss
        serializer = PlayersSerializer(playerss, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PlayersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)

        return Response(serializer.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)


class PlayersDetailView(APIView):

    def get(self, _request, pk):
        players = Players.objects.get(pk=pk)
        serializer = PlayersSerializer(players)
        return Response(serializer.data)

    def put(self, request, pk):
        players = Players.objects.get(pk=pk)
        serializer = PlayersSerializer(players, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, _request, pk):
        players = Players.objects.get(pk=pk)
        players.delete()

        return Response(status=HTTP_204_NO_CONTENT)

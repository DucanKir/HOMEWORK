from django.urls import path
from .views import PlayersListView, PlayersDetailView, GameListView, GameDetailView

urlpatterns = [
    path('games/', GameListView.as_view()),
    path('games/<int:pk>/', GameDetailView.as_view()),
    path('players/', PlayersListView.as_view()),
    path('players/<int:pk>/', PlayersDetailView.as_view()),
]

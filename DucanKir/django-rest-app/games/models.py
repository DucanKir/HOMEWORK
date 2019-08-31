from django.db import models

# Create your models here.
class Players(models.Model):
    number_of_players = models.CharField(max_length=20)

    def __str__(self):
        return f'{self.number_of_players}'

class Genre(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class Game(models.Model):
    title = models.CharField(max_length=50)
    players = models.ForeignKey(Players, related_name='games', on_delete=models.CASCADE)
    image = models.CharField(max_length=200, blank=True)
    genres = models.ManyToManyField(Genre, related_name='games', blank=True)

    def __str__(self):
        return f'{self.title} - {self.players}'

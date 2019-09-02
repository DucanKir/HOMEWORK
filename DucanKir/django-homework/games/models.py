from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Game(models.Model):
    title = models.CharField(max_length=50)
    genre = models.CharField(max_length=30)
    year = models.IntegerField()
    image = models.CharField(max_length=200)
    user = models.ForeignKey(User, related_name='games', on_delete=models.CASCADE)

    class Meta:
        unique_together = ['title', 'year',]


    def __str__(self):
        return self.title

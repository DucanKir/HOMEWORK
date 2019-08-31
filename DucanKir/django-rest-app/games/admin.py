from django.contrib import admin

# Register your models here.
from .models import Players, Genre, Game

admin.site.register(Players)
admin.site.register(Genre)
admin.site.register(Game)

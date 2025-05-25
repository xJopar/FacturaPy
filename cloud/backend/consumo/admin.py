from django.contrib import admin
from .models import Lectura

admin.site.register(Lectura)

# backend/consumo/models.py
from django.db import models
from django.contrib.auth.models import User

class Lectura(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    fecha = models.DateField(auto_now_add=True)
    lectura_kwh = models.DecimalField(max_digits=10, decimal_places=2)
    monto_calculado = models.DecimalField(max_digits=12, decimal_places=2)
    imagen_medidor = models.ImageField(upload_to='lecturas/', null=True, blank=True)

# backend/consumo/serializers.py
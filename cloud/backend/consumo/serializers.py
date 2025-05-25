from rest_framework import serializers
from .models import Lectura

class LecturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lectura
        fields = '__all__'
        read_only_fields = ['usuario', 'fecha', 'monto_calculado']

# backend/consumo/views.py
from rest_framework import viewsets
from .models import Lectura
from .serializers import LecturaSerializer
from rest_framework.permissions import IsAuthenticated

def calcular_monto(kwh):
    kwh = float(kwh)
    if kwh <= 100:
        return kwh * 500
    elif kwh <= 300:
        return 100 * 500 + (kwh - 100) * 700
    return 100 * 500 + 200 * 700 + (kwh - 300) * 1000

class LecturaViewSet(viewsets.ModelViewSet):
    serializer_class = LecturaSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Lectura.objects.filter(usuario=self.request.user)

    def perform_create(self, serializer):
        lectura_kwh = self.request.data.get('lectura_kwh')
        monto = calcular_monto(lectura_kwh)
        serializer.save(usuario=self.request.user, monto_calculado=monto)

from django.test import TestCase
from django.contrib.auth.models import User
from .models import Lectura

class LecturaModelTest(TestCase):

    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpass')
        self.lectura = Lectura.objects.create(
            usuario=self.user,
            lectura_kwh=150,
            monto_calculado=95000
        )

    def test_lectura_creation(self):
        self.assertEqual(self.lectura.usuario.username, 'testuser')
        self.assertEqual(self.lectura.lectura_kwh, 150)
        self.assertEqual(float(self.lectura.monto_calculado), 95000.0)
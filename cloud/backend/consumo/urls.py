from .views import LecturaViewSet
from django.urls import path, include

router = DefaultRouter()
router.register(r'lecturas', LecturaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

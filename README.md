# FacturaPy

FacturaPy es una aplicación web que permite calcular el monto a pagar por el consumo de electricidad en Paraguay, basado en la lectura del medidor en kWh. El proyecto ofrece dos implementaciones: una versión monolítica y otra orientada a la nube utilizando contenedores.

## Estructura del Repositorio

```
FacturaPy/
├── monolitico/       # Implementación monolítica con Django + PostgreSQL
├── cloud/            # Implementación nativa para la nube (Docker + PostgreSQL + React)
└── README.md         # Documentación del proyecto
```

## Requisitos

- Docker  
- Docker Compose  
- PostgreSQL (para la versión monolítica)  
- Python 3.11 o superior  
- Git  

## Cómo levantar cada versión

### Versión Monolítica

**Pasos:**

```bash
cd monolitico
python -m venv env
source env/bin/activate  # En Windows: env\Scripts\activate
pip install -r requirements.txt
```

**Configurar PostgreSQL localmente:**

```sql
CREATE DATABASE facturapy;
CREATE USER admin WITH PASSWORD 'admin123';
GRANT ALL PRIVILEGES ON DATABASE facturapy TO admin;
```

**Luego ejecutar:**

```bash
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

**Accesos:**

- Panel de administración Django: http://localhost:8000/admin  
- API REST: http://localhost:8000/api/

---

### Versión CLOUD

**Pasos:**

```bash
cd cloud
docker-compose up --build
```

**Inicializar base de datos:**

```bash
docker exec -it cloud-backend-1 bash
python manage.py migrate
python manage.py createsuperuser
```

**Accesos:**

- Frontend (React): http://localhost:3000  
- Backend API: http://localhost:8000/api/  
- Panel de administración Django: http://localhost:8000/admin

## Tecnologías utilizadas

- **Django + Django REST Framework**: Backend RESTful  
- **React**: Interfaz de usuario en la versión cloud  
- **PostgreSQL**: Base de datos  
- **Docker & Docker Compose**: Contenedores y orquestación

## Autores

- Jose Maria Cabrera  
- Sergio David Sosa  
- Simon Del Pozo Nuñez

## Licencia

Este proyecto se encuentra bajo la licencia MIT.

**Contribuciones son bienvenidas.**

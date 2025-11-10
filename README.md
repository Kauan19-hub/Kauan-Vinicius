**<h2>Integrator Project - SmartCity</h2>**

###

- [https://www.django.com](https://www.djangoproject.com/)<br>
- [https://www.pythonanywhere.com](https://www.pythonanywhere.com/)

---

```powershell
git clone https://github.com/Kauan19-hub/SmartCity-PI.git
```

###
```json
"terminal.integrated.fontFamily": "none",
"terminal.integrated.fontSize": 14,
"terminal.integrated.lineHeight": 1.3,
```

###
```json
 "editor.fontFamily": "Arial",
```

| Package | Version |
|---------|---------|
|asgiref  |                     `3.10.0` |
|django   |                     `5.2.8` |
|djangorestframework |          `3.16.1` |
|djangorestframework_simplejwt | `5.5.1` |
|pip |                          `25.3` |
|PyJWT |                        `2.10.1` |
|sqlparse |                     `0.5.3` |
|tzdata |                       `2025.2` |
|django-cors-headers |          `4.9.0`|

###
```powershell
python manage.py pop_responsaveis dados/responsaveis.csv
```

###
```powershell
python manage.py pop_locais dados/locais.csv
```

###
```powershell
python manage.py pop_ambientes dados/ambientes.csv
```

###
```powershell
python manage.py pop_sensores dados/sensores.csv
```

###
```python
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

class Command(BaseCommand):

    def handle(self, *args, **options):
        username = "kauan"
        password = "12345"
        if not User.objects.filter(username=username).exists():
            User.objects.create_superuser(username=username,email="",password=password)
            self.stdout.write(self.style.SUCCESS("Usuário 'kauan' criado! Sua senha atual é 12345"))
        else:
            self.stdout.write("Usuário já existe.")
```

---

```powershell
python manage.py create_default_superuser
```

###
```powershell
python manage.py makemigrations
```

###
```powershell
python manage.py migrate
```

###
```powershell
python manage.py create_default_superuser  # kauan/12345
```

###
```powershell
python manage.py runserver
```

###
```
api_smart/
├─ api_smart/
│  ├─ settings.py
│  ├─ urls.py
│  └─ ...
├─ sensores/
│  ├─ migrations/
│  ├─ management/
│  │  └─ commands/
│  │     ├─ pop_responsaveis.py
│  │     ├─ pop_locais.py
│  │     ├─ pop_ambientes.py
│  │     ├─ pop_sensores.py
│  │     └─ create_default_superuser.py
│  ├─ models.py
│  ├─ serializers.py
│  ├─ views.py
│  ├─ urls.py
│  └─ admin.py
└─ manage.py
```

###
```powershell
pip install django-cors-headers
```

---

| Resource	| Description	| Difficult | Responsable |
----------|-----------|-------------|--------------|
| JWT Authentication |	Login and token access `with djangorestframework-simplejwt` |	Medium 🟠 | Kauan - Full-Stack |
| Script `pop_bd.py` |	Populate the database with simulated data using `pandas` or `Faker` |	Low 🟢 | Kauan - Full-Stack |
| CORS |	Allow the Angular Front-End to access the API `django-cors-headers` |	Low 🟢 | Kauan - Full-Stack |
| Filter by environment/sensor	| Ex: “/historico?sensor=3” |	Low 🟢 | Kauan - Full-Stack |
| **Deploy**	| Up to `PythonAnywhere`	| Hard 🔴 | Kauan - Full-Stack |

---

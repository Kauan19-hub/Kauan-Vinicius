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
|Django   |                     `5.2.8` |
|djangorestframework |          `3.16.1` |
|djangorestframework_simplejwt | `5.5.1` |
|pip |                          `25.3` |
|PyJWT |                        `2.10.1` |
|sqlparse |                     `0.5.3` |
|tzdata |                       `2025.2` |

###
```python
python manage.py pop_responsaveis dados/responsaveis.csv
```

###
```python
python manage.py pop_locais dados/locais.csv
```

###
```python
python manage.py pop_ambientes dados/ambientes.csv
```

###
```python
python manage.py pop_sensores dados/sensores.csv
```

###
```python
# sensores/management/commands/create_default_superuser.py
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

class Command(BaseCommand):
    help = "Cria superuser padrão (senai / 123) se não existir"

    def handle(self, *args, **options):
        username = "senai"
        password = "123"
        if not User.objects.filter(username=username).exists():
            User.objects.create_superuser(username=username, email="", password=password)
            self.stdout.write(self.style.SUCCESS("Superuser 'senai' criado com senha '123'"))
        else:
            self.stdout.write("Superuser já existe.")
```

---

```powershell
python manage.py create_default_superuser
```

###
```python
python manage.py makemigrations
```

###
```python
python manage.py migrate
```

###
```python
python manage.py create_default_superuser  # senai/12345
```

###
```python
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

---

| Resource	| Description	| Difficult | Responsable |
----------|-----------|-------------|--------------|
| JWT Authentication |	Login and token access `with djangorestframework-simplejwt` |	Medium 🟠 | Kauan - Full-Stack |
| Script `pop_bd.py` |	Populate the database with simulated data using `pandas` or `Faker` |	Low 🟢 | Kauan - Full-Stack |
| CORS |	Allow the Angular Front-End to access the API `django-cors-headers` |	Low 🟢 | Kauan - Full-Stack |
| Filter by environment/sensor	| Ex: “/historico?sensor=3” |	Low 🟢 | Kauan - Full-Stack |
| **Deploy**	| Up to `PythonAnywhere`	| Hard 🔴 | Kauan - Full-Stack |

---

**<h2>🔹 Back-End</h2>**

###

<div align="left">
  <img src="https://skillicons.dev/icons?i=py" height="35" alt="python logo" title="Python" />
  <img width="2" />
  <img src="https://skillicons.dev/icons?i=django" height="35" alt="django logo" title="Django" />
</div>

###

**<h2>🔹 DataBase</h2>**

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="35" alt="mysql logo" title="SQL/MySQL" />
  <img width="2" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" height="35" alt="sqlite logo" title="SQLite" />
</div>

###

**<h2>🔹 Front-End</h2>**

###

<div align="left">
  <img src="https://skillicons.dev/icons?i=html" height="35" alt="html5 logo" title="HTML5" />
  <img width="2" />
  <img src="https://skillicons.dev/icons?i=bootstrap" height="35" alt="bootstrap logo" title="Bootstrap" />
  <img width="2" />
  <img src="https://skillicons.dev/icons?i=angular" height="35" alt="angularjs logo" title="AngularJS" />
  <img width="2" />
  <img src="https://skillicons.dev/icons?i=nodejs" height="35" alt="nodejs logo" title="NodeJS" />
  <img width="2" />
  <img src="https://skillicons.dev/icons?i=js" height="35" alt="javascript logo" title="JavaScript" />
  <img width="2" />
  <img src="https://skillicons.dev/icons?i=ts" height="35" alt="typescript logo" title="TypeScript" />
</div>

###

**<h2>🔹CI/CD</h2>**

###

<div align="left">
  <img src="https://skillicons.dev/icons?i=postman" height="35" alt="postman logo" title="Postman" />
</div>

<h6>Private repository temporarily</h6>

###

**<h1>Welcome to the Django</h1>**

###

- [https://www.django.com](https://www.djangoproject.com/)<br>
- [https://www.pythonanywhere.com](https://www.pythonanywhere.com/)<br>
- [Schedule PI](https://docs.google.com/spreadsheets/d/12AE5yBveux_2cIrt4mSIaHuZQShaH1ww/edit?usp=drive_link&ouid=108717680234956090795&rtpof=true&sd=true)<br>
- [Documentation (PDF)](https://drive.google.com/file/d/1OU9r8RbmzPFyM0hApZ5tZ6ClSnwWNMKF/view?usp=drive_link)

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

###
```json
"name": "Digital City",
"description": "Integrator Project (PI)",
"author": "Kauan Vinícius",
"skill": "Full-Stack Jr",
"created_at": ["2025", "November"],
"main_languages": ["Python", "Django"],
"api_url": "http://localhost:8000/",
```

###

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
        username = "senai"
        password = "123"
        if not User.objects.filter(username=username).exists():
            User.objects.create_superuser(username=username,email="",password=password)
            self.stdout.write(self.style.SUCCESS("Usuário 'senai' criado! Sua senha atual é 123"))
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
python manage.py create_default_superuser  # senai123
```

###
```powershell
python manage.py runserver
```

###
```powershell
pip install django-cors-headers
```

---

<div align="left">
  <img src="https://skillicons.dev/icons?i=vscode" height="35" alt="vscode logo" title="Visual Studio Code" />
  <img width="1" />
  <img src="https://skillicons.dev/icons?i=git" height="35" alt="git logo" title="Git" />
  <img width="1" />
  <img src="https://skillicons.dev/icons?i=github" height="35" alt="github logo" title="GitHub" />
  <img width="1" />
  <img src="https://skillicons.dev/icons?i=py" height="35" alt="python logo" title="Python" />
  <img width="1" />
  <img src="https://skillicons.dev/icons?i=django" height="35" alt="django logo" title="Django" />
  <img width="1" />
  <img src="https://skillicons.dev/icons?i=mysql" height="35" alt="mysql logo" title="SQL" />
  <img width="1" />
  <img src="https://skillicons.dev/icons?i=sqlite" height="35" alt="sqlite logo" title="SQLite" />
  <img width="1" />
  <img src="https://skillicons.dev/icons?i=postman" height="35" alt="postman logo" title="Postman" />
</div>

###



<h6>Private repository temporarily</h6>

###

**<h1>Welcome to the Django</h1>**

###

[Django WebSite](https://www.djangoproject.com/);
<br>
<br>
[Install Python](https://www.python.org/);
<br>
<br>
[DevOps & CI/CD](https://www.postman.com/downloads/);
<br>
<br>
[Deploy Software](https://www.pythonanywhere.com/);
<br>
<br>
[Schedule IP](https://docs.google.com/spreadsheets/d/12AE5yBveux_2cIrt4mSIaHuZQShaH1ww/edit?usp=drive_link&ouid=108717680234956090795&rtpof=true&sd=true);
<br>
<br>
[Documentation (PDF)](https://drive.google.com/file/d/12b756bOYD-apVB8VWss_5psgeSL2xa8y/view?usp=drive_link);
<br>
<br>
[React WebSite](https://react.dev/);
<br>
<br>
[Source Code-Editor](https://code.visualstudio.com/download);
<br>
<br>
[Install Node.JS](https://nodejs.org/pt);
<br>
<br>
[Apresentation Canva](https://www.canva.com/design/DAG5kgfZnsg/9FH1eMmFDjmhvffwtBH86Q/edit).

###

<h6>Visual Studio Code Interface -- Official WebSite | Downloads for different operating systems</h6>

###

<img width="800" height="800" alt="image" src="https://github.com/user-attachments/assets/b203c64a-f8e8-45f9-9a23-9691dc6ade41" />

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
"main_languages": ["Python", "Django", "Node", "React"],
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

---

###
```powershell
npx create-react-app {name}
```

###
```powershell
cd {name}
````

###
```powershell
npm run dev
```

---

```json
{
  "name": "smartcity",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "smartcity",
      "version": "0.0.0",
      "dependencies": {
        "@hookform/resolvers": "^5.2.2",
        "react": "^19.2.0",
        "react-dom": "^19.2.0",
        "react-hook-form": "^7.66.0",
        "react-router-dom": "^7.9.6"
      },
      "devDependencies": {
        "@eslint/js": "^9.39.1",
        "@types/react": "^19.2.2",
        "@types/react-dom": "^19.2.2",
        "@vitejs/plugin-react": "^5.1.0",
        "eslint": "^9.39.1",
        "eslint-plugin-react-hooks": "^7.0.1",
        "eslint-plugin-react-refresh": "^0.4.24",
        "globals": "^16.5.0",
        "vite": "^7.2.2"
      }
    },
```

---

<h6>URL Back-End</h6>

###

```powershell
http://127.0.0.1:8000/api/sensor/
```

<h6>URL Django Admin</h6>

###
```powershell
http://127.0.0.1:8000/admin
```

<h6>URL Django API</h6>

###
```powershell
http://127.0.0.1:8000/api
```

###

<h6>URL Front-End</h6>

###
```powershell
http://localhost:5173/
```

<h6>Output React</h6>

###

```jsx
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

<h6>Output Django</h6>

###

```python
System check identified no issues (0 silenced).
November 27, 2025 - 07:57:30
Django version 5.2.8, using settings 'api_smart_city.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.

WARNING: This is a development server. Do not use it in a production setting. Use a production WSGI or ASGI server instead.
For more information on production servers see: https://docs.djangoproject.com/en/5.2/howto/deployment/
Watching for file changes with StatReloader
Performing system checks...
```
---

<img width="600" height="600" alt="image" src="https://github.com/user-attachments/assets/f5128bbe-9509-4f99-83fb-cc9d74ed0236" />

###

<img width="600" height="600" alt="image" src="https://github.com/user-attachments/assets/30e9dedc-6ddc-4530-b660-c0bbae458929" />

###

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

**<h2>🎨 Prototype Figma</h2>**

###

<h6>Click on the image below and access the Digital City UI/UX</h6>

###

<div align="left">
 <a href="https://www.figma.com/design/vG8RTChmcSyf97XEXaLjbY/Digital-City?m=auto&t=dsPRO4pmuNon2C56-6" title="Access to my Prototype">
  <img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/6942a592-155b-497f-85f5-dd733b519851" />
 </a>
</div>

---

*Front-End*

###

<div align="left">
  <img src="https://skillicons.dev/icons?i=html" height="35" alt="html5 logo" title="HTML5" />
  <img width="1" />
  <img src="https://skillicons.dev/icons?i=js" height="35" alt="javascript logo" title="JavaScript" />
  <img width="1" />
  <img src="https://skillicons.dev/icons?i=nodejs" height="35" alt="nodejs logo" title="NodeJS" />
  <img width="1" />
  <img src="https://skillicons.dev/icons?i=css" height="35" alt="css logo" title="CSS" />
  <img width="1" />
  <img src="https://skillicons.dev/icons?i=react" height="35" alt="react logo" title="React" />
  <img width="1" />
  <img src="https://skillicons.dev/icons?i=vite" height="35" alt="vite logo" title="Vite" />
</div>

###

*Tools*

###

<div align="left">
  <img src="https://skillicons.dev/icons?i=vscode" height="35" alt="vscode logo" title="Visual Studio Code" />
  <img width="1" />
  <img src="https://skillicons.dev/icons?i=git" height="35" alt="git logo" title="Git" />
  <img width="1" />
  <img src="https://skillicons.dev/icons?i=github" height="35" alt="github logo" title="GitHub" />
</div>

###

*Back-End*

###

<div align="left">
  <img src="https://skillicons.dev/icons?i=py" height="35" alt="python logo" title="Python" />
  <img width="1" />
  <img src="https://skillicons.dev/icons?i=django" height="35" alt="django logo" title="Django" />
</div>

###

*DevOps*

###

<div align="left">
  <img src="https://skillicons.dev/icons?i=postman" height="35" alt="postman logo" title="Postman" />
</div>

###

*Data-Base*

###

<div align="left">
  <img src="https://skillicons.dev/icons?i=mysql" height="35" alt="mysql logo" title="MySQL" />
  <img width="1" />
  <img src="https://skillicons.dev/icons?i=sqlite" height="35" alt="sqlite logo" title="SQLite" />
</div>

###

*UI/UX*

###

<div align="left">
  <img src="https://skillicons.dev/icons?i=figma" height="35" alt="figma logo" title="Figma" />
  <img width="1" />
  <img src="https://skillicons.dev/icons?i=ai" height="35" alt="adobeillustrator logo" title="Adobe Illustrator" />
</div>

###




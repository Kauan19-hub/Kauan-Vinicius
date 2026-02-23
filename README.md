## SmartCity | Digital City

###

**<h6>Editor and Terminal</h6>**

###
```json
"terminal.integrated.fontFamily": "none",
"terminal.integrated.fontSize": 14,
"terminal.integrated.lineHeight": 1.3,
"editor.fontFamily": "Arial",
```

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
            self.stdout.write(self.style.SUCCESS(f"Usuário {username} criado! Sua senha atual é {password}"))
        else:
            self.stdout.write(f"Usuário {username} já existe.")
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

**OBS.:** We can delete, update, and delete a sensor through the testing software.

###

**<h6>node_modules install</h6>**

###

`npm i` || `npm i --legac-peer-deps`

###

**<h6>Insomnia</h6>**

###

`PUT`, `DELETE`, `GET`, `POST` -- for all elements of the system. All with these methods inside each one's folder

###

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
http://localhost:5173
```

---

[Install Postman ➜ API Test](https://www.postman.com/downloads/);
<br>
<br>
[Install Insomnia ➜ API Test 2](https://insomnia.rest/download/).

###

Methods: `GET`, `POST`, `PUT`, `DELETE`

###

**<h6>Local</h6>**

###
```
http://127.0.0.1:8000/api/local/
```

**<h6>Ambiente</h6>**

###
```
http://127.0.0.1:8000/api/ambiente/
```

**<h6>Responsavel</h6>**

###
```
http://127.0.0.1:8000/api/responsavel/
```

###

**<h6>Sensor</h6>**

###
```
http://127.0.0.1:8000/sensor/ || http://127.0.0.1:8000/api/sensor/
```

###

**<h6>Histórico</h6>**

###
```
http://127.0.0.1:8000/api/historico/
```

###

**<h6>Django Admin</h6>**

###
```
http://127.0.0.1:8000/admin/ || http://127.0.0.1:8000/api/admin/
```

###

**<h6>Base</h6>**

###
```
http://127.0.0.1:8000/
```

###

**<h6>Token</h6>**

###
```
http://127.0.0.1:8000/api/token/
```

###

`BODY` - `JSON`

###

**<h6>Output</h6>**

```json
{
	"refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc2NDk0MzIyMCwiaWF0IjoxNzY0ODU2ODIwLCJqdGkiOiIwMjcwMzE4Yjk3ZmE0YjhkYmYxZTk0NmU1ZWRjNTg0ZCIsInVzZXJfaWQiOiIxIn0.im4eMIYq0KDaF5QJqHxs2DzAOWav0a_Ln8tYsD6SUB0",
	"access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzY0ODYwNDIwLCJpYXQiOjE3NjQ4NTY4MjAsImp0aSI6IjMwZDNiNDQzZjgyMjQwNzZhOThlMWZlN2Q0MDhlNzVlIiwidXNlcl9pZCI6IjEifQ.mZk3khn2pL0d6pT3L_T8oLqHPDsdL-yoQd6oJpAydaU"
}
```

> The token needs to be updated every 5 minutes by the testing software

---

**<h6>Token</h6>**

###

```python
class TokenListCreate(TokenObtainPairView):
    serializer_class = TokenObtainPairSerializer
```

###

```python
path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
```

###

**<h6>Access token</h2>**

###

```
http://127.0.0.1:8000/api/sensor -- AUTH -- BEARER TOKEN -- Refresh Code
```

###

**<h6>Token Front-End React - Validation</h6>**

###
```python
const token = localStorage.getItem("access"); ### The token jwt name is "access"
console.log("Token enviado:", token);
```

###
```python
if (!token) {
	setError("Token não identificado. Faça login novamente");
	setLoading(false);
	return;

}
```

###
```python
const response = await fetch("http://127.0.0.1:8000/api/sensor/", {
	headers: {
		"Authorization": `Bearer ${token}`,
		"Content-Type": "application/json"
	}
});
```

###
```python
if (!response.ok) {
	throw new Error(`Erro ao buscar dados: ${response.status`);
}
```

---

**<h6>Oficial Documentation React and Vite</h6>**

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

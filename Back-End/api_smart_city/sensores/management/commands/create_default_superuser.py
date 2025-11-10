from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

class Command(BaseCommand):
    def handle(self,*args,**options):
        user = "kauan"
        password = "12345"

        if not User.objects.filter(user=user).exists():
            User.objects.create_superuser(user=user,email="",password=password)
            self.stdout.write(self.style.SUCCESS("Usuário 'kauan' criado! Sua senha atual é 12345"))
        else:
            self.stdout.write("Usuário já existe")
import pandas as pd
from django.core.management.base import BaseCommand
from sensores.models import Responsavel

class Command(BaseCommand):

    def add_arguments(self,parser):
        parser.add_argument("arquivo",type=str)

    def handle(self,*args,**options):
        path = options["arquivo"]
        df = pd.read_csv(path)

        for _, row in df.iterrows():
            nome = str(row.get("nome") or row.get("Nome") or "").lower()
            if nome:
                obj, _ = Responsavel.objects.get_or_create(nome=nome)
        
        self.stdout.write(self.style.SUCCESS("Responsáveis importados com sucesso!"))
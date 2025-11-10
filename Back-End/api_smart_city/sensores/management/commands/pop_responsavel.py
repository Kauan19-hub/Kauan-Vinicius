import pandas as pd
from django.core.management.base import BaseCommand
from sensores.models import Responsavel

class Command(BaseCommand):

    def add_arguments(self,parser):
        parser.add_argument("csvfile",type=str)

    def handle(self,*args,**options):
        path = options["csvfile"]
        df = pd.read_csv(path)

        created = 0

        for _, row in df.iterrows():
            nome = str(row.get("nome") or row.get("Nome") or "").strip().lower()
            if nome:
                obj, _ = Responsavel.objects.get_or_create(nome=nome)
                
                created += 1
        
        self.stdout.write(self.style.SUCESS(f"{created} responsáveis importados com sucesso!"))
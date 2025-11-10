import pandas as pd
from django.core.management.base import BaseCommand
from sensores.models import Ambiente

class Command(BaseCommand):

    def add_arguments(self,parser):
        parser.add_argument('arquivo',type=str)

    def handle(self,*args,**options):
        path = options["arquivo"]
        df = pd.read_csv(path)

        for _, row in df.iterrows():
            name = str(row.get("name") or row.get("Name") or "").lower()
            if name:
                obj, _ = Ambiente.objects.get_or_create(name=name)

        self.stdout.write(self.style.SUCCESS("Ambientes importados com sucesso!"))
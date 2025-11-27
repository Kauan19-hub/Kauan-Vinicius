import pandas as pd

from django.core.management.base import BaseCommand
from sensores.models import Ambiente, Local, Responsavel

class Command(BaseCommand):

    def add_arguments(self,parser):
        parser.add_argument("arquivo",type=str)

    def handle(self,*args,**options):
        path = options["arquivo"]
        
        try:
            df = pd.read_csv(path, encoding="utf-8-sig")
        except Exception as e:
            self.stderr.write(self.style.ERROR(f"Erro ao ler CSV {e}"))
            
        required = ["local", "descricao", "responsavel"]
        for column in required:
            if column not in df.columns:
                self.stderr.write(self.style.ERROR(f"O arquivo precisa da coluna {column}"))
                
        counter = 0
            
        for _, row in df.iterrows():
            try:
                local_id = int(row["local"])
                descricao = str(row["descricao"]).strip()
                responsavel_id = int(row["responsavel"])
                
                local = Local.objects.filter(id=local_id).first()
                responsavel = Responsavel.objects.filter(id=responsavel_id).first()
                
                if not local:
                    self.stderr.write(self.style.WARNING(f"Local ID {local_id} não identificado"))
                    continue
                
                if not responsavel:
                    self.stderr.write(self.style.WARNING(f"Responsável ID {responsavel_id} não identificado"))
                    continue
                
                Ambiente.objects.get_or_create(
                    local=local,
                    descricao=descricao,
                    responsavel=responsavel
                )
                
                counter += 1
                
            except Exception as e:
                  self.stderr.write(self.style.ERROR(f"Erro ao exibir a linha {e}"))
                  
        self.stdout.write(self.style.SUCCESS(f"{counter} ambientes importados com sucesso!"))

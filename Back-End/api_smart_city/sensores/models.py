from django.db import models

class Responsavel(models.Model):
    nome = models.CharField(max_length=210)

    def __str__(self):
        return self.nome
    
class Local(models.Model):
    nome = models.CharField(max_length=210)

    def __str__ (self):
        return self.nome
    
class Ambiente(models.Model):
    local = models.ForeignKey(Local, on_delete=models.CASCADE, related_name='ambiente')
    description = models.TextField(blank=True)
    responsable = models.ForeignKey(Responsavel, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f"{self.local.nome} - {self.description[:40]}"
    
class Sensor(models.Model):
    SENSOR_TYPES = [
        ("temperatura", "Temperatura"),
        ("luminosidade", "Luminosidade"),
        ("umidade", "Umidade"),
        ("contador", "Contador"),
    ]
    STATUS = [
        ("ativo", "Ativo"),
        ("inativo", "Inativo"),
    ]
    idSensor = models.AutoField(primary_key=True)
    tipoSensor = models.CharField(max_length=25, choices=SENSOR_TYPES)
    identifSensor = models.CharField(max_length=110, unique=True)
    unidadeMedSensor = models.CharField(max_length=25, blank=True)
    latidudeSensor = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    longitudeSensor = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    statusSensor = models.CharField(max_length=12, choices=STATUS, default="ativo")
    ambienteSensor = models.ForeignKey(Ambiente, on_delete=models.SET_NULL, null=True, blank=True)
    timestampSensor = models.DateTimeField(auto_now_add=True)

    def save_all(self, *args, **kwargs):
        if not self.unidadeMedSensor:
            unidade = {
                "temperatura": "°C",
                "luminosidade": "lux",
                "umidade": "%",
                "contador": "num",
            }
            self.unidadeMedSensor = unidade.get(self.tipoSensor, "")
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.idSensor} - {self.tipoSensor} - {self.identifSensor}"
    
class Historico(models.Model):
    sensor = models.ForeignKey(Sensor, on_delete=models.CASCADE, related_name="historico")
    valor = models.DecimalField(max_digits=12, decimal_places=4)
    ambiente = models.ForeignKey(Ambiente, on_delete=models.SET_NULL, null=True, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.sensor} - {self.valor} @ {self.timestamp}"
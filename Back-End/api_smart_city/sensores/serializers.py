from rest_framework import serializers
from .models import Responsavel, Ambiente, Local, Historico, Sensor

class ResponsavelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Responsavel
        fields = "__all__"

class LocalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Local
        fields = "__all__"

class AmbienteSerializer(serializers.ModelSerializer):
    local_nome = serializers.PrimaryKeyRelatedField(
        source="local.nome",
        read_only=True
    )

    class Meta:
        model = Ambiente
        fields = ["id", "local", "local_nome", "responsavel", "descricao"]

class SensoresSerializer(serializers.ModelSerializer):
    ambiente_nome = serializers.CharField(source="ambienteSensor.descricao", read_only=True)
    local_nome = serializers.CharField(source="ambienteSensor.local.nome", read_only=True, default=None)
    responsavel_nome = serializers.CharField(source="ambienteSensor.responsavel.nome", read_only=True, default=None)

    class Meta:
        model = Sensor
        fields = "__all__"

class HistoricoSerializer(serializers.ModelSerializer):
    sensor_identificacao = serializers.CharField(source="sensor.identifSensor", read_only=True)
    ambiente_nome = serializers.CharField(source="ambiente.descricao", read_only=True)

    class Meta:
        model = Historico
        fields = ["id", "valor", "timestamp", "sensor", "sensor_identificacao", "ambiente", "ambiente_nome"]

    def validate(self, data):
        sensor = data.get("sensor")
        if sensor and sensor.status == "inativo":
            raise serializers.ValidationError(
                "Não foi possível realizar o registro de medição: Sensor inativo"
            )
        return data

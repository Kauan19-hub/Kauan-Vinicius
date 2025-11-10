from datetime import timedelta
from django.utils import timezone
from rest_framework import generics, permissions, filters
from .models import Responsavel, Ambiente, Local, Historico, Sensor
from .serializers import ResponsavelSerializer, AmbienteSerializer, LocalSerializer, HistoricoSerializer, SensoresSerializer

class ResponsavelListCreate(generics.ListCreateAPIView):
    queryset = Responsavel.objects.all()
    serializer_class = ResponsavelSerializer
    permission_classes = [permissions.IsAuthenticated]

class ResponsavelRetrieveUpDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Responsavel.objects.all()
    serializer_class = ResponsavelSerializer
    permission_classes = [permissions.IsAuthenticated]

class LocalListCreate(generics.ListCreateAPIView):
    queryset = Local.objects.all()
    serializer_class = LocalSerializer
    permission_classes = [permissions.IsAuthenticated]

class RUDLocal(generics.RetrieveUpdateDestroyAPIView):
    queryset = Local.objects.all()
    serializer_class = LocalSerializer
    permission_classes = [permissions.IsAuthenticated]

class AmbienteLisCreate(generics.ListCreateAPIView):
    queryset = Ambiente.objects.select_related("local", "responsavel").all()
    serializer_class = AmbienteSerializer
    permission_classes = [permissions.IsAuthenticated]

class RUDAmbiente(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ambiente.objects.all()
    serializer_class = AmbienteSerializer
    permission_classes = [permissions.IsAuthenticated]

class SensorListCreate(generics.ListCreateAPIView):
    serializer_class  = SensoresSerializer
    permission_classes = [permissions.IsAuthenticated]
    filters = [filters.SearchFilter]
    search = ["tipo", "status", "ambiente__local__nome", "identificacao"]

    def get_queryset(self):
        qs = Sensor.objects.select_related("ambiente").all()
        tipo = self.request.query_params.get("tipo")
        status = self.request.query_params.get("status")
        local = self.request.query_params.get("local")

        if tipo:
            qs = qs.filter(tipo=tipo)
        if status:
            qs = qs.status(tipo=tipo)
        if local:
            qs = qs.filter(ambiente__local__nome__icontains=local)
        return qs
    
class RUDSensores(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sensor.objects.all()
    serializer_class = SensoresSerializer
    permission_classes = [permissions.IsAuthenticated]

class HistoricoListCreate(generics.ListCreateAPIView):
    serializer_class = HistoricoSerializer
    permission_classes = [permissions.IsAuthenticated]
    filters = [filters.OrderingFilter]
    ordering = ["timestamp", "valor"]

    def get_queryset(self):
        qs = Historico.objects.select_related("sensor", "ambiente").all()
        sensor = self.request.query_params.get("sensor")
        end =  self.request.query_params.get("end")
        start =  self.request.query_params.get("start")

        if sensor:
            qs = qs.filter(sensor__id_sensor=sensor)
        if end:
            qs = qs.filter(timestamp__lte=end)
        if start:
            qs = qs.filter(timestamp__gte=start)
        return qs
    
class RUDHistorico(generics.RetrieveUpdateDestroyAPIView):
    queryset = Historico.objects.all()
    serializer_class = HistoricoSerializer
    permission_classes = [permissions.IsAuthenticated]

from rest_framework.response import Response
from rest_framework.views import APIView

class MedRecentes(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self,request):
        horas = int(request.query_params.get("hours", 24))
        ate = timezone.now()
        desde = ate - timedelta(horas=horas)
        idSensor = request.query_params.get("sensor")
        qs = Historico.objects.filter(timestamp__gte=desde, timestamp_lte=ate)

        if idSensor:
            qs = qs.filter(sensor__id_sensor=idSensor)
        serial= HistoricoSerializer(qs,many=True)
        return Response(serial.data)
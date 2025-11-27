from datetime import timedelta;
from django.utils import timezone;
from django.utils.dateparse import parse_datetime;
from rest_framework import generics, permissions, filters, viewsets;
from rest_framework.response import Response;

from rest_framework.views import APIView;
from .models import Responsavel, Ambiente, Local, Historico, Sensor;
from .serializers import ResponsavelSerializer, AmbienteSerializer, LocalSerializer, HistoricoSerializer, SensoresSerializer;

class SensorViewSet(viewsets.ModelViewSet):
    queryset = Sensor.objects.all()
    serializer_class = SensoresSerializer
    permission_classes = [permissions.AllowAny]

class SensorListCreate(generics.ListCreateAPIView):
    serializer_class = SensoresSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = [filters.SearchFilter]
    search_fields = ["tipo", "status", "ambiente__local__nome", "identificacao"]

    def get_queryset(self):
        qs = Sensor.objects.select_related("ambienteSensor").all()
        tipo = self.request.query_params.get("tipo")
        status = self.request.query_params.get("status")
        local = self.request.query_params.get("local")
        if tipo:
            qs = qs.filter(tipo=tipo)
        if status:
            qs = qs.filter(status=status)
        if local:
            qs = qs.filter(ambienteSensor__local__nome__icontains=local)
        return qs

class RUDSensores(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sensor.objects.all()
    serializer_class = SensoresSerializer
    permission_classes = [permissions.IsAuthenticated]

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

class AmbienteListCreate(generics.ListCreateAPIView):
    queryset = Ambiente.objects.select_related("local", "responsavel").all()
    serializer_class = AmbienteSerializer
    permission_classes = [permissions.IsAuthenticated]

class RUDAmbiente(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ambiente.objects.all()
    serializer_class = AmbienteSerializer
    permission_classes = [permissions.IsAuthenticated]

class HistoricoListCreate(generics.ListCreateAPIView):
    serializer_class = HistoricoSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [filters.OrderingFilter]
    ordering = ["timestamp", "valor"]

    def get_queryset(self):
        qs = Historico.objects.select_related("sensor", "ambiente").all()
        sensor = self.request.query_params.get("sensor")
        start = self.request.query_params.get("start")
        end = self.request.query_params.get("end")
        if sensor:
            qs = qs.filter(sensor__id=sensor)
        if start:
            start_dt = parse_datetime(start)
            if start_dt:
                qs = qs.filter(timestamp__gte=start_dt)
        if end:
            end_dt = parse_datetime(end)
            if end_dt:
                qs = qs.filter(timestamp__lte=end_dt)
        return qs

class RUDHistorico(generics.RetrieveUpdateDestroyAPIView):
    queryset = Historico.objects.all()
    serializer_class = HistoricoSerializer
    permission_classes = [permissions.IsAuthenticated]

class MedRecentes(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        horas = int(request.query_params.get("hours", 24))
        ate = timezone.now()
        desde = ate - timedelta(hours=horas)
        idSensor = request.query_params.get("sensor")
        qs = Historico.objects.filter(timestamp__gte=desde, timestamp__lte=ate)
        if idSensor:
            qs = qs.filter(sensor__id=idSensor)
        return Response(HistoricoSerializer(qs, many=True).data)

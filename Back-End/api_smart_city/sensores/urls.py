from django.urls import path
from . import views

urlpatterns = [
    path("responsavel/", views.ResponsavelListCreate.as_view(), name="resp-list-create"),
    path("responsavel/<int:pk>/", views.ResponsavelRetrieveUpDestroy.as_view(), name="resp-rud"),

    path("local/", views.LocalListCreate.as_view(), name="local-lis-create"),
    path("local/<int:pk>/", views.RUDLocal.as_view(), name="local-rud"),

    path("ambiente/", views.AmbienteLisCreate.as_view(), name="ambi-list-create"),
    path("ambiente/<int:pk>/", views.RUDAmbiente.as_view(), name="ambi-rud"),

    path("sensor/", views.SensorListCreate.as_view(), name="sensor-list-create"),
    path("sensor/<int:pk>/", views.RUDSensores.as_view(), name="sensor-rud"),

    path("medicoes/", views.HistoricoListCreate.as_view(), name="medicoes-list-create"),
    path("medicoes/<int:pk>/", views.RUDHistorico.as_view(), name="medicoes-rud"),
    path("medicoes/recentes/", views.MedRecentes.as_view(), name="med-recentes"),

]

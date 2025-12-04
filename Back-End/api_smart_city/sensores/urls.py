from django.urls import path
from django.http import JsonResponse

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from . import views

urlpatterns = [
    path('', lambda request: JsonResponse({'message': 'PI em andamento'})),

     path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
     path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path("responsavel/", views.ResponsavelListCreate.as_view(), name="resp-list-create"),
    path("responsavel/<int:pk>/", views.ResponsavelRetrieveUpDestroy.as_view(), name="resp-rud"),

    path("local/", views.LocalListCreate.as_view(), name="local-lis-create"),
    path("local/<int:pk>/", views.RUDLocal.as_view(), name="local-rud"),

    path("ambiente/", views.AmbienteListCreate.as_view(), name="ambi-list-create"),
    path("ambiente/<int:pk>/", views.RUDAmbiente.as_view(), name="ambi-rud"),

    path("sensor/", views.SensorListCreate.as_view(), name="sensor-list-create"),
    path("sensor/<int:pk>/", views.RUDSensores.as_view(), name="sensor-rud"),

    path("medicao/", views.HistoricoListCreate.as_view(), name="medicao-list-create"),
    path("medicao/<int:pk>/", views.RUDHistorico.as_view(), name="medicao-rud"),
    path("medicao/recentes/", views.MedRecentes.as_view(), name="med-recentes"),
]

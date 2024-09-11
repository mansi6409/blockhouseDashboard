from django.http import HttpResponse
from django.urls import include, path
from .views import bar_chart_data, candlestick_data, home, line_chart_data, pie_chart_data

urlpatterns = [
    path('', home), 
    path('api/candlestick-data/', candlestick_data),
    path('api/line-chart-data/', line_chart_data),
    path('api/bar-chart-data/', bar_chart_data),
    path('api/pie-chart-data/', pie_chart_data),
]
from django.http import HttpResponse
from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response


def home(request):
    return HttpResponse("Welcome to the Django API. Use /api/candlestick-data/ or /api/line-chart-data/ for data.")


@api_view(['GET'])
def candlestick_data(request):
    data = {
        "labels": ["2023-01-01", "2023-01-02"],  # Dates
        "datasets": [
            {
                "label": "Candlestick Data",
                "data": [
                    {"x": "2023-01-01", "o": 30, "h": 40, "l": 25, "c": 35},
                    {"x": "2023-01-02", "o": 35, "h": 45, "l": 30, "c": 40}
                ],
                "borderColor": "rgba(0, 0, 0, 1)",  # Color for border
                "backgroundColor": "rgba(0, 0, 0, 0.1)"  # Color for the candlestick body
            }
        ]
    }
    return Response(data)

@api_view(['GET'])
def line_chart_data(request):
    data = {
        "labels": ["Jan", "Feb", "Mar", "Apr"],
        "datasets": [
            {
            "label": "Dataset 1",
            "data": [10, 20, 30, 40],
            "borderColor": "rgba(75, 192, 192, 1)",
            "backgroundColor": "rgba(75, 192, 192, 0.2)"
            }
        ]
    }
    return Response(data)

@api_view(['GET'])
def bar_chart_data(request):
    data = {
        "labels": ["Product A", "Product B", "Product C"],
        "datasets": [
            {
            "label": "Dataset 1",
            "data": [100, 150, 200],
            "backgroundColor": ["#FF6384", "#36A2EB", "#FFCE56"]
            }
        ]
    }
    return Response(data)

@api_view(['GET'])
def pie_chart_data(request):
    data = {
        "labels": ["Red", "Blue", "Yellow"],
        "datasets": [
            {
            "data": [300, 50, 100],
            "backgroundColor": ["#FF6384", "#36A2EB", "#FFCE56"]
            }
        ]
    }
    return Response(data)

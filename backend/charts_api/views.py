from django.http import HttpResponse
from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response


def home(request):
    return HttpResponse("Welcome to the Django API. Use /api/candlestick-data/ or /api/line-chart-data/ for data.")


@api_view(['GET'])
def candlestick_data(request):
    data = {
        "labels": [
            "2023-01-01", "2023-01-02", "2023-01-03", "2023-01-04", 
            "2023-01-05", "2023-01-06", "2023-01-07", "2023-01-08", 
            "2023-01-09", "2023-01-10"
        ],
        "datasets": [
            {
                "label": "Candlestick Data",
                "data": [
                    {"x": "2023-01-01", "o": 30, "h": 40, "l": 25, "c": 35},
                    {"x": "2023-01-02", "o": 35, "h": 45, "l": 30, "c": 40},
                    {"x": "2023-01-03", "o": 40, "h": 50, "l": 35, "c": 45},
                    {"x": "2023-01-04", "o": 45, "h": 55, "l": 40, "c": 50},
                    {"x": "2023-01-05", "o": 50, "h": 60, "l": 45, "c": 55},
                    {"x": "2023-01-06", "o": 55, "h": 65, "l": 50, "c": 60},
                    {"x": "2023-01-07", "o": 60, "h": 70, "l": 55, "c": 65},
                    {"x": "2023-01-08", "o": 65, "h": 75, "l": 60, "c": 70},
                    {"x": "2023-01-09", "o": 70, "h": 80, "l": 65, "c": 75},
                    {"x": "2023-01-10", "o": 75, "h": 85, "l": 70, "c": 80}
                ],
                "borderColor": "rgba(0, 0, 0, 1)",  # Color for borders
                "backgroundColor": "rgba(0, 0, 0, 0.1)"  # Color for candlestick body
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
        "labels": ["January", "February", "March", "April"],  # x-axis labels
        "datasets": [
            {
                "label": "Sales 2023",  # Label for the dataset
                "data": [65, 59, 80, 81],  # The actual data points for the y-axis
                "backgroundColor": [
                    'rgba(75, 192, 192, 0.2)',  # Background color for each bar
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                "borderColor": [
                    'rgba(75, 192, 192, 1)',  # Border color for each bar
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                "borderWidth": 1,  # Border width for each bar
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

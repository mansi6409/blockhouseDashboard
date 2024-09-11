from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status

class ChartAPITest(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_candlestick_data(self):
        response = self.client.get('/api/candlestick-data/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['datasets'][0]['data']), 10)

    def test_line_chart_data(self):
        response = self.client.get('/api/line-chart-data/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['labels']), 4)
        self.assertEqual(len(response.data['datasets'][0]['data']), 4)

    def test_bar_chart_data(self):
        response = self.client.get('/api/bar-chart-data/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['labels']), 4)
        self.assertEqual(len(response.data['datasets'][0]['data']), 4)
        self.assertEqual(response.data['datasets'][0]['label'], "Sales 2023")

    def test_pie_chart_data(self):
        response = self.client.get('/api/pie-chart-data/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['labels']), 3)
        self.assertEqual(len(response.data['datasets'][0]['data']), 3)

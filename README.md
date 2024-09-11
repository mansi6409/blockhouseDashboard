
# Dashboard Chart Application

This project is a dashboard featuring multiple interactive charts including Bar, Line, Pie, and Candlestick charts. The chart data is fetched from a Django backend API and displayed on the frontend using React, Redux, and Tailwind CSS for styling.

## Table of Contents

- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Libraries and Tools](#libraries-and-tools)
- [Approach and Thought Process](#approach-and-thought-process)

## Setup and Installation

### Prerequisites

Before running the application, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (or Yarn)
- **Python** (v3.7 or higher)
- **Django**
- **PostgreSQL** (optional, but recommended)

### Backend Setup

1. **Navigate to Backend Directory**:
   ```bash
   cd backend
   ```

2. **Create and Activate Virtual Environment (Optional)**:
   It’s recommended to use a virtual environment for the Django application.
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Python Dependencies**:
   Run the following to install all Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. **Apply Database Migrations**:
   ```bash
   python manage.py migrate
   ```

5. **Run the Backend Server**:
   Start the Django development server:
   ```bash
   python manage.py runserver
   ```

   The API will be running at [http://localhost:8000](http://localhost:8000).

### Frontend Setup

1. **Navigate to Frontend Directory**:
   ```bash
   cd frontend
   ```

2. **Install Dependencies**:
   Run the following command to install the necessary npm packages:
   ```bash
   npm install
   ```

3. **Start the Frontend**:
   After installing dependencies, you can run the development server:
   ```bash
   npm run dev
   ```

   The frontend will be available at [http://localhost:3000](http://localhost:3000).

4. **Tailwind CSS Configuration**:
   Tailwind CSS is used for styling, and it is already configured in `globals.css` and `tailwind.config.js`. The global styles are loaded in the layout component.

## Running the Application

1. **Start the backend API using Django**:
   ```bash
   python manage.py runserver
   ```
   The API should be accessible at `http://localhost:8000/api/`.

2. **Run the frontend using Next.js**:
   ```bash
   npm run dev
   ```

3. **Navigate to** [http://localhost:3000](http://localhost:3000) to see the dashboard and charts.

## Backend API

The Django API serves the data for each chart. Below are the available API endpoints:

- **Bar Chart Data**: `/api/bar-chart-data/`
- **Line Chart Data**: `/api/line-chart-data/`
- **Pie Chart Data**: `/api/pie-chart-data/`
- **Candlestick Chart Data**: `/api/candlestick-data/`

## Libraries and Tools

### Backend:
- **Django**: Used for creating the backend API that provides chart data.
- **Django REST Framework**: To easily create REST APIs.
- **Python**: For the backend logic and API.

### Frontend:
- **Next.js**: Used as the React framework to create the dashboard.
- **React-Chart.js-2**: For rendering the charts using Chart.js.
- **Chart.js**: Library for building the charts.
- **Redux**: State management for fetching chart data and maintaining the global state.
- **Tailwind CSS**: For styling the frontend components.
- **Axios**: For making API requests from the frontend.

## Approach and Thought Process

### Backend:
- The Django REST API is structured with different endpoints for each chart's data, ensuring modularity and easy maintainability.
- The chart data is hardcoded in the API for simplicity, but can be dynamically generated or fetched from a database if required.

### Frontend:
- **State Management**: Redux is used to manage global state and make API calls to fetch chart data. This ensures the charts are updated automatically when data changes.
- **Charts**: React-Chart.js-2 is used to display the charts, leveraging Chart.js for chart rendering. Each chart has its own component, making the code modular and maintainable.
- **Styling**: Tailwind CSS is used to style the frontend, making it responsive and visually appealing.
- **Responsiveness**: The dashboard layout is made responsive using Tailwind CSS, ensuring proper display on different screen sizes.

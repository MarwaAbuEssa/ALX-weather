# ALX Weather

This project is part of the ALX program, where I chose to develop a weather dashboard. It is designed for anyone interested in knowing the weather conditions in their area.

## Tech Stack
- **Frontend**: Angular v18.2.9
- **Backend (if needed)**: Node.js v10.9.2
- **UI Libraries (if needed)**: Bootstrap, PrimeNG
- **Testing Frameworks**: Karma, Jasmine

## AI Integration Strategy
- **Code Generation**: Using Angular schematics or any other ready-made template.
- **Testing**: Using Karma and Jasmine for unit testing.
- **Documentation**: Inline documentation and also added to the README file. The project will always verify docstrings for different functions.
- **Context-Aware Techniques**:
    - **Location-based context**:
        - Detect the user’s current city (via GPS or IP).
        - Automatically show local weather first instead of a global default.
        - Adapt units (°C vs. °F) depending on region.
    - **Time-based context**:
        - Show “Good morning / Good evening” messages with weather updates.
        - Change dashboard themes (light/day vs. dark/night) depending on sunrise/sunset times.
        - Send a notification if there’s rain expected in the next hour.

## Setup

### OpenWeatherMap API Key
To run this application, you need an API key from OpenWeatherMap.
1. Go to [OpenWeatherMap](https://openweathermap.org/api) and sign up for a free account.
2. Generate an API key from your account dashboard.
3. In the `weather-dashboard-backend` directory, create a `.env` file.
4. Add your API key to the `.env` file in the format: `API_KEY=your_openweathermap_api_key_here`

### Frontend (Angular)

1. Navigate to the frontend directory: `cd weather-dashboard-frontend`
2. Install dependencies: `npm install`
3. Run the development server: `npm start`
4. Open your browser to `http://localhost:4200/`

### Backend (Node.js)

1. Navigate to the backend directory: `cd weather-dashboard-backend`
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. The backend will be running on `http://localhost:3000/`

## Application Demonstration

Here are some screenshots demonstrating the application's functionality for various cities:

### Alexandria
![Alexandria Weather](https://i.imgur.com/your_alexandria_image_link.png)

### Dar es Salaam
![Dar es Salaam Weather](https://i.imgur.com/your_dar_es_salaam_image_link.png)

### Johannesburg
![Johannesburg Weather](https://i.imgur.com/your_johannesburg_image_link.png)

### Cairo
![Cairo Weather](https://i.imgur.com/your_cairo_image_link.png)

## Unit Testing

### Frontend (Angular)

1.  Navigate to the frontend directory: `cd weather-dashboard-frontend`
2.  Run unit tests: `ng test`

### Backend (Node.js)

1.  Navigate to the backend directory: `cd weather-dashboard-backend`
2.  Install a testing framework (e.g., Mocha, Jest): `npm install --save-dev mocha` (or `npm install --save-dev jest`)
3.  Run unit tests: `npm test` (after configuring your `package.json` scripts)
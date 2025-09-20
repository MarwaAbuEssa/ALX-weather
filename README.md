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

### Frontend (Angular)

1.  Navigate to the frontend directory: `cd weather-dashboard-frontend`
2.  Install dependencies: `npm install`
3.  Run the development server: `ng serve`
4.  Open your browser to `http://localhost:4200/`

### Backend (Node.js)

1.  Navigate to the backend directory: `cd weather-dashboard-backend`
2.  Install dependencies: `npm install`
3.  Start the server: `node server.js`
4.  The backend will be running on `http://localhost:3000/`

## Unit Testing

### Frontend (Angular)

1.  Navigate to the frontend directory: `cd weather-dashboard-frontend`
2.  Run unit tests: `ng test`

### Backend (Node.js)

1.  Navigate to the backend directory: `cd weather-dashboard-backend`
2.  Install a testing framework (e.g., Mocha, Jest): `npm install --save-dev mocha` (or `npm install --save-dev jest`)
3.  Run unit tests: `npm test` (after configuring your `package.json` scripts)
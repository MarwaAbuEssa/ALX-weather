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
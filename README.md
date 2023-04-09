# Covid-19 Map

Covid-19 Map is a React application that allows users to view Covid-19 statistics by clicking on countries on a world map.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Deploying the Project](#deploying-the-project)
- [Technologies Used](#technologies-used)

## Features

- View a country's Covid-19 statistics by clicking on the world map
- Display information such as confirmed cases, deaths, recoveries, and update date for the selected country
- Access country details directly via a link
- Loading animation during API waiting times
- User notification for API connection issues

## Installation

1. Clone the project:
   ```
   https://github.com/sadumankucuk/covid19-tracker.git
   ```
2. Install dependencies:
   ```
      cd project-repo
   
      npm install or yarn 
   ```

4. Run the application locally:
   ```
   npm start or yarn start
   ```

The application will run at [http://localhost:3000](http://localhost:3000).

## Running Tests

1. Run tests with the following command:
   ```
   npm test or yarn test
   ```

Tests will run and the results will be displayed in the console.

## Deploying the Project

1. Build the application using the following command:
   ```
   npm run build or yarn build
   ```

   This will create an optimized version of the project for deployment.

2. Upload the generated `build` folder to your web server.

3. Configure the relevant web server settings to deploy your application.

### Deploying with Docker

1. Build the Docker image with the following command:
   ```
   npm run docker:build
   ```

2. Run the Docker container with the following command:
   ```
   npm run docker:run
   ```

The application will run at [http://localhost:3000](http://localhost:3000).

## Technologies Used

- React
- Redux
- Redux Saga
- React Router
- Mapbox GL
- Ant Design
- Jest
- React Testing Library
- Docker
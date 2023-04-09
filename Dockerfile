# Use a Node.js-based image for the build stage
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the application
RUN npm run build

# Use an Nginx image for the production stage
FROM nginx:stable-alpine

# Copy the build output to the Nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port for the application
EXPOSE 3000

# Copy the .env file to the Docker image
COPY .env .

# Set environment variables based on the .env file
ENV REACT_APP_MAPBOX_TOKEN=$REACT_APP_MAPBOX_TOKEN
ENV REACT_APP_RAPID_API_KEY=$REACT_APP_RAPID_API_KEY

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

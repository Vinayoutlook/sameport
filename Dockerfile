# Use the official Node.js image as a base image
FROM node:18

# Set the working directory for the application
WORKDIR /usr/src/app

# Copy the backend package.json and package-lock.json
COPY react-backend/package*.json ./react-backend/

# Install backend dependencies
RUN npm install --prefix ./react-backend

# Copy the backend code
COPY react-backend ./react-backend

# Copy the frontend package.json and package-lock.json
COPY react-app/package*.json ./react-app/

# Install frontend dependencies
RUN npm install  ./react-app

# Copy the frontend code
COPY react-app ./react-app

# Build the React app
RUN npm run build --prefix ./react-app

# Set the environment variable for the port
ENV PORT=3001

# Expose the port your app will run on
EXPOSE 3001

# Command to run the backend server
CMD ["node", "react-backend/index.js"]

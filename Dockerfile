# Use a Node.js base image
FROM node:latest

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy all other files to container
COPY . .

# Expose port
EXPOSE 3001

# Command to start the app
CMD ["npm", "start"]

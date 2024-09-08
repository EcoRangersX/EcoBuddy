# Use the official Node.js image as the base image
FROM node:18

# Set the working directory
WORKDIR /home/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Start the application
CMD ["npx", "expo", "start"]

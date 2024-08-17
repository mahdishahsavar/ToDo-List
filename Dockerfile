# Step 1: Use an official Node.js image as the base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the application
RUN npm run build

# Step 7: Install a simple HTTP server to serve static files
RUN npm install -g serve

# Step 8: Set the command to run the application
CMD ["serve", "-s", "dist"]

# Step 9: Expose the port the app will run on
EXPOSE 3000

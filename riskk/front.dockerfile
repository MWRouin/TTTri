# Use an official Node.js image to build the application
FROM node:16 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./FRONT/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ./FRONT .

# Build the React app
RUN npm run build 

# Use an nginx image to serve the build files
FROM nginx:alpine

# Copy the built files from the previous stage to nginx's default directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

# Set base image
FROM node:14.16.1-alpine

# use app as the working directory
WORKDIR /app

# Copy the files from the currecnt direcotory to app
COPY . /app

# Install Dependencies
RUN npm ci
# RUN npm install

# Build production app
RUN npm run build

#listen on the spcified port
EXPOSE 3000

# Set node server
ENTRYPOINT npm run start

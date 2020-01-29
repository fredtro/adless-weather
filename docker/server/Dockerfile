#########################################
# Stage 1 - the build process for dev env
#########################################
FROM node:13-alpine as dev-stage

# Create server directory
WORKDIR /usr/src/server

COPY server/package*.json ./
RUN npm install

COPY server/src src/
COPY server/public public/
COPY server/.babelrc ./

EXPOSE 8080
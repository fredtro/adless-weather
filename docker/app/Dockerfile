#########################################
# Stage 1 - the build process for dev env
#########################################
FROM node:13-alpine as dev-stage

# Create server directory
WORKDIR /usr/src/app

COPY app/package*.json ./
RUN npm install

COPY app/src src/
COPY app/public public/

EXPOSE 8080

CMD ["npm", "run", "start"]
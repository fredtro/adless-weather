FROM node:13-alpine as dev-stage

# Create server directory
WORKDIR /usr/src/server

COPY server/package*.json server/*.lock ./
RUN ls -al
RUN npm install

COPY server/src src/
COPY server/public public/
COPY server/views views/
COPY server/.babelrc ./

EXPOSE 8080

CMD ["npm", "run", "dev"]

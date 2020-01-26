## Adless weather service
### Challenge

adless-weather-service

Create a restful nodeJS micro service with following requirements:

- should run within a docker container (don't have to be deployable to k8s or similar)
- should provide /metrics endpoint with prometheus metric format
- should provide /health endpoint
- should provide a /search endpoint, used for the frontend application, which accepts 2 query params:
"city": required, string
"country": optional, string

 examples usage:
/search?city=zurich
/search?city=heidelberg&country=germany

responds with weather forecast information:
statusCode 200
content-type application/json
gets the weather data from https://openweathermap.org/


Implementation details:
Use a web application framework like express, Koa, hapi eg.
Add some unit tests
Nice to have: functional tests
Nice to have: Introduce caching layer (eg. in-memory, file system or db) to reduce the api calls agains openweathermap

---

adless-weather-app

Create a react frontend application like specified in the mockup, server by a webserver and running within a docker container with following requirements:
Search for city
Optional search for country (in addition to city)
Search should be triggered either by click on button or when hitting enter within the input
Show results in a table
Show below search results an image of the city (use the 

Implementation details:
You can use any ui framework like material, bootstrap eg. or implement styling entirely yourself. There’s no UI contest to win here but it should look good.
Add some unit tests (jest & enzyme for example)
Nice to have: e2e tests or visual tests
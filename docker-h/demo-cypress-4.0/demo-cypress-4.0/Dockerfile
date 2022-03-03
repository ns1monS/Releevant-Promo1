FROM cypress/included:4.1.0

run npm install cypress-cucumber-prepocessor

WORKDIR /app

COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json

RUN npx cypress run
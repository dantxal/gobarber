# GOBARBER

Study project developed inside the Rocketseat's Bootcamp 8.0

**Technologies: React, React-Native, NodeJS, Redux, Styled-Components**

## A fullstack application powered by Nodejs, React and React Native.

This project allows it's users to find a barber wich they like and schedule an appointment, 
while also allowing the barbers to manage their schedule within the web app.

To achieve this, the project includes a Mobile App, a Web App and an API.

## The Mobile App

The mobile app is built with React Native.

It includes 7 screens, using 3 different navigator types. 

The dashboard uses a Stack Navigator to give the users a funnel-like experience.

The application's state is managed through Redux, using sagas and redux-persist (for saving state in case the user closes the app).

The app is also connected to Reactotron in development for better debugging.

## The Web App

The web app is the admin panel for barbers.

Powered by React, it includes 4 screens. 

The dashboard aims for allowing the users to read the information they need quickly, so the UI is simple and efficient.

The application's state is also managed through Redux, using sagas and redux-persist (for saving state in case the user closes the site).

A very useful feature from the WebApp is the Notification System, which delivers the most recent events in a separate place and cronologically.

## The Backend

The API includes the main proccess which deals with *auth, providers, appointments, notifications 
and files* (for profile pictures); and a Queue proccess to execute side jobs, which are 
sending emails when determined events occur.

The main reason for using a separate proccess is to **avoid creating a slow experience to 
users** while sending emails, which are more timely operations.

To store all this data the API connects to a Postgres database through Sequelize, and 
stores the jobs onto a Redis database.


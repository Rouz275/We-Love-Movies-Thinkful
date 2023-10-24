## Project: WeLoveMovies

>You've been hired on as a backend developer for a new startup called WeLoveMovies! As another developer works on the design and frontend experience, you have been tasked with setting up a database and building out specific routes so that users can gain access to data about movies, theaters, and reviews.

For detailed instructions on how to complete this project, consult the Instructions document in the Qualified assessment interface.

## Learning objectives

>This project is designed to test your ability to both build complex servers and access data through a database. To succeed at this project, you'll need to demonstrate you can do the following:

- Install and use common middleware packages
- Receive requests through routes
- Run tests from the command line
- Access relevant information through route and query parameters
- Create an error handler for the case where a route doesn't exist
- Build an API following RESTful design principles
- Create and customize a knexfile.js file
- Create a connection to your database with Knex
- Write database queries to complete CRUD routes in an Express server
- Return joined and nested data with Knex
- Write database migrations using Knex's migration tool
- Deploy your backend server to a cloud service


![alt WeloveMovies](https://images.ctfassets.net/c7lxnbtvvcxm/3xzgFVIxgNM4H53CsJkKJa/64c51046aa810105e3ef4af77867a6f7/WeLoveMovies.png) 


## Project setup
Follow the instructions below to get this project up and running on your own machine:

- Run ``` npm install ``` to install the project and run  ``` git init  ``` to initialize a Git repository.
## Running tests
To run the tests, you can run the following command:
npm test
```sh
npm test
```

## Instructions
You are tasked with both setting up the database and building a number of routes that will be used by the frontend application. For this project, you will start by making the necessary changes to the data tier and then proceed to make changes to the application tier following an inside-out development workflow. Each table is detailed below, as is each route.

## General tasks

- Your app.js file and server.js file are correctly configured, with your app.js file exporting the application created from Express.
- You make use of the cors package so that requests from the frontend can correctly reach the backend.
- If a request is made to a route that does not exist, the server returns a 404 error.
- If a request is made to a route that exists, but the HTTP method is wrong, a 405 error is returned.
- All of your routes should respond with the appropriate status code and should use a data key in the response.


## Database tables

- You will create five tables for this project. View the docs/tables/ folder in this project to get more detailed information on each table.
- You will need to create migrations for each of these tables and run those migrations.
- Seed data is included in this project in the ./src/db/seeds folder. The seeds will run correctly if and only if the tables are setup as described in the previous documents.

## Routes

You will create five routes for this project. View the docs/routes/ folder in this project to get more detailed information on each table.
Note that some routes return data dependent on query parameters.

## Requirements to pass

For your project to pass, all of the following statements must be true. These criteria are reflected in the rubric in the following lesson.

- All the tests are passing in Qualified.
- The migrations can be correctly run and rolled back.
- The seed command can be run multiple times and work correctly.
- A response is included for Method Not Allowed.
- The cors package is included.
- The entire application is deployed and working.

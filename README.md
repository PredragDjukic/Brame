# Brame


## Installation

Use npm to install all packages

```bash
npm install
```

## Database

Create a postgres database. All required data about database are stored in src/db.ts.

Use the dbscripts/brame.sql to create tables and insert test data

## Postman
Import postmancollection/Brame.postman_collection.json into the Postman.

Create 2 variables

*apiBaseUrl* with value of http://localhost:8000/api

*authToken* with initial random string. This one will be set up automatically after a sign up

## Run the application

To run the application use

```bash
npm run dev
```

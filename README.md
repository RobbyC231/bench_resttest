# Bench Rest Test
Here is a solution for the Bench Rest Test which followed the problem outlined [here](https://resttest.bench.co/front-end)
- This app was designed to read an API and gather all transactions to display in a table

# What is required?
- [node](https://nodejs.org/en/) and npm 

# How to get started
- `npm install`
- `npm start`
- Navigate to http://localhost:3000 in your browser

# About app
This app was built using Javascript and the react framework, utilizing ES6 syntax and react hooks

# Things to improve
- Testing
    - Have test coverage surrounding the fetching of the API
    - Have test coverage if data is malformed
- Better error handling
    - Need something better than logging errors in the console from API fetch
- Add ability to sort table based on column
- Looks to be duplicate transactions in the data set, might want to add functionality to filter these out
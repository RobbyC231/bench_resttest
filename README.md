# Bench Rest Test
Here is a solution for the Bench Rest Test to address the problem outlined [here](https://resttest.bench.co/front-end)
- This app was designed to read an API and gather all transactions to display in a table

# What is required?
- [node](https://nodejs.org/en/) and npm 

# How to get started
- `npm install`
- `npm start`
- Navigate to http://localhost:3000 in your browser

# About the app
This app was built using Javascript and the React framework, utilizing ES6 syntax and React hooks

# Things to improve
- Testing
    - Have test coverage surrounding the fetching of the API
    - Have test coverage if data is malformed
- Better error handling
    - Need something better than logging errors in the console from API fetch
- Add ability to sort table based on column
- There are duplicate transactions in the data set, might want to add functionality to filter these out
require('dotenv').config()

const request = require('request');
const handleResponse = require('./handleResponse')
const options = require('./options')

request
    .get(options.finOptions)
    .on('response', function(response) {
        handleResponse(response, 'retrieve');
    })
    .on('error', function(error) {
        console.log('OH NO, there was an ERROR retrieving the entities: ' + error);
    })
    .pipe(request.put(options.ddOptions))
    .on('response', function(response) {
        handleResponse(response, 'migrate');
    })
    .on('error', function(error) {
        console.log('OH NO, there was an ERROR migrating the entities: ' + error);
    })

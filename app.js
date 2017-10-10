require('dotenv').config()

var request = require('request');

var finOptions = {
    uri: 'http://localhost:8080/kfs-dev/sys/api/v1/data-dictionary/entities',
    headers: {
      'Authorization': 'Bearer ' + process.env.AUTH_TOKEN
    },
    json: true // Automatically stringifies the body to JSON
};

var ddOptions = {
    uri: 'http://localhost:8001/cor/datadictionary/api/v1/migrate/entities',
    headers: {
        'Authorization': 'Bearer ' + process.env.AUTH_TOKEN,
        'Content-Type': 'application/json'
    },
    json: true // Automatically stringifies the body to JSON
};

request
    .get(finOptions)
    .on('response', function(response) {
        const statusCode = response.statusCode;
        if (statusCode === 200) {
            console.log('Success! Entities have been retrieved!');           
        } else {
            console.log('There was a problem retrieving the entities: ' + response.statusCode + ': ' + response.statusMessage);
        }
    })
    .on('error', function(error) {
        console.log('OH NO, there was an ERROR retrieving the entities: ' + error);
    })
    .pipe(request.put(ddOptions))
    .on('response', function(response) {
        const statusCode = response.statusCode;
        if (statusCode === 200) {
            console.log('Success! Entities have been migrated!');           
        } else {
            console.log('There was a problem migrating the entities: ' + response.statusCode + ': ' + response.statusMessage);
        }
    })
    .on('error', function(error) {
        console.log('OH NO, there was an ERROR migrating the entities: ' + error);
    })

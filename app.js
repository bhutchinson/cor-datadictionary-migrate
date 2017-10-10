require('dotenv').config()

var request = require('request');
var rp = require('request-promise');

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
        console.log(response.statusCode);
    })
    .pipe(request.put(ddOptions))
    .on('response', function(response) {
        console.log(response.statusCode);
    })

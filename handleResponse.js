const message = require('./messages')

function handleResponse(response, action) {
    const statusCode = response.statusCode;
    if (statusCode === 200) {
        console.log(message[action].success);
    } else {
        console.log(message[action].failure + ': ' + response.statusCode + ': ' + response.statusMessage);
    }
}

module.exports = handleResponse;


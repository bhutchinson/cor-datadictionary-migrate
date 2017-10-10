const finOptions = {
    uri: 'http://localhost:8080/kfs-dev/sys/api/v1/data-dictionary/entities',
    headers: {
      'Authorization': 'Bearer ' + process.env.AUTH_TOKEN
    }
};

const ddOptions = {
    uri: 'http://localhost:8001/cor/datadictionary/api/v1/migrate/entities',
    headers: {
        'Authorization': 'Bearer ' + process.env.AUTH_TOKEN,
        'Content-Type': 'application/json'
    }
};

module.exports = {
    finOptions,
    ddOptions
}
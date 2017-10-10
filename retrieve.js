require('dotenv').config()
const http = require('http');

async function retrieveEntities() {
    const options = {
        hostname: 'localhost',
        port: 8080,
        path: '/kfs-dev/sys/api/v1/data-dictionary/entities',
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + process.env.AUTH_TOKEN
        }
    };
    
    await http.get(options, (res) => {
        const { statusCode } = res;
        const contentType = res.headers['content-type'];
      
        let error;
        if (statusCode !== 200) {
          error = new Error('Request Failed.\n' +
                            `Status Code: ${statusCode}`);
        } else if (!/^application\/json/.test(contentType)) {
          error = new Error('Invalid content-type.\n' +
                            `Expected application/json but received ${contentType}`);
        }
        if (error) {
          console.error(error.message);
          // consume response data to free up memory
          res.resume();
          return;
        }
      
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
          try {
            const parsedData = JSON.parse(rawData);
            // console.log(parsedData);
            return parsedData;
          } catch (e) {
            console.error(e.message);
          }
        });
      }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
    });
}

module.exports = retrieveEntities;
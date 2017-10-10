require('dotenv').config()

const retrieveEntities = require('./retrieve');

// (async () => {
//     const parsedData = await retrieveEntities();
//     console.log(parsedData);
// })().catch(e => consle.error(e.message, e.stack)); 

// const parsedData = retrieveEntities();
// console.log(parsedData);

async function main() {
    try {
        const parsedData = await retrieveEntities();
        console.log(parsedData);
    } catch (err) {
        console.error(err);
    }
}

main();

// retrieveEntities()
//     .then(parsedData => console.log(parsedData))
//     .catch(err => console.error(err));
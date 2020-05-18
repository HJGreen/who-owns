// const dns = require('dns');
import dns from 'dns';

const handler = function (event, context, callback) {
  dns.resolve(event.queryStringParameters.hostname, 'ANY', (err, records) => {
    callback(err, {
      statusCode: 200,
      body: JSON.stringify(records)
    });
  })
}

export {handler}

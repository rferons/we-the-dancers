const https = require("https");

module.exports = {
  urlEncode(data) {
    return Object.keys(data).map(k => `${encodeURI(k)}=${encodeURI(data[k])}`).join('&');
  },

  request(options, data) {
    return new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        res.setEncoding('utf8');

        let responseBody = '';
        res.on('data', (chunk) => responseBody += chunk);
        res.on('end', () => {
          const parsedBody = JSON.parse(responseBody + '');

          const response = {
            statusCode: res.statusCode,
            statusMessage: res.statusMessage,
            body: parsedBody
          }

          console.log(response)

          res.statusCode !== 200
            ? reject(response)
            : resolve(response)
        })
      });

      if (data) {
        req.write(data);
      }

      req.end();
      req.on('error', (err) => reject(err))
    });
  }
}
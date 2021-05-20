import https from 'https';
import url from 'url';

const request = (method, url, opts = {}) => {

  return new Promise((resolve) => {
    const urlObject = new URL(url);
    const data = JSON.stringify(opts.json);
    const options = {
      path: urlObject.pathname,
      hostname: urlObject.hostname,
      port: 443,
      method: method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    }

    const req = https.request(options, res => {
      res.on('data', d => {
        let response = d.toString('utf8');
        try {
          response = JSON.parse(response);
        } catch(e) {}
        resolve(response);
      })
    })

    req.on('error', error => {
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

const get = async (url, opts) => {
  return await request('get', url, opts);
}

const post = async (url, opts) => {
  return await request('post', url, opts);
}

export default { get, post }
const fs = require('fs');
const https = require('https');
const FormData = require('form-data');

async function run() {
  try {
    const data = new FormData();
    data.append('file', fs.createReadStream("/home/ubuntu/.openclaw/media/inbound/file_2---85f8cf6c-5a35-4a54-b539-ab02fbf05d1f.ogg"));
    data.append('model', 'whisper-1');

    const options = {
      hostname: 'api.myclaw.ai',
      port: 443,
      path: '/v1/audio/transcriptions',
      method: 'POST',
      headers: {
        ...data.getHeaders(),
        'Authorization': 'Bearer 3881fe54-1fe2-48cb-990d-075d0fbd33e4.0790ade9-9e25-40e2-9344-a96f64e810df'
      }
    };

    const req = https.request(options, (res) => {
      let responseBody = '';
      res.on('data', (chunk) => {
        responseBody += chunk;
      });
      res.on('end', () => {
        console.log(responseBody);
      });
    });

    req.on('error', (e) => {
      console.error(e);
    });

    data.pipe(req);
  } catch(e) {
    console.error(e.message);
  }
}

run();
const fs = require('fs');
const file = '/home/ubuntu/.openclaw/openclaw.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
if (data.channels && data.channels.telegram && data.channels.telegram.accounts) {
  delete data.channels.telegram.accounts.stella;
  delete data.channels.telegram.accounts.default;
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Patch successful');
} else {
  console.log('Failed to find target path');
}

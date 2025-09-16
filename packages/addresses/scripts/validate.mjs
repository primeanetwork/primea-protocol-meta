import fs from 'fs';
import path from 'path';

const p = path.resolve('packages/addresses/src/addresses.json');
const raw = fs.readFileSync(p, 'utf8');
let data;
try {
  data = JSON.parse(raw);
} catch (e) {
  console.error('addresses.json is invalid JSON:', e.message);
  process.exit(1);
}

const requiredChains = ['698369', '1698369'];
for (const c of requiredChains) {
  if (!data.chains?.[c]) {
    console.error(`Missing chains["${c}"]`);
    process.exit(1);
  }
}
console.log('addresses.json basic checks: OK');

const fs = require('fs');

const result = {
    tag: 'const:develop-v1.0.0',
    text: 'const:develop-v1.0.0'
}
fs.writeFileSync('build-result.json', JSON.stringify(result, null, 2), 'utf8');
const fs = require('fs');

const result = {
    tag: 'develop-v1.0.0',
    text: 'test'
}
fs.writeFileSync('build-result.json', JSON.stringify(result, null, 2), 'utf8');
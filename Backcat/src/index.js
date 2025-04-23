require('dotenv').config();
const app = require('./app.js');
require('./database/Database.js');

async function main() {
    const port = app.get('port');
    await app.listen(port);
    console.log(`Server on port ${port}`);
    console.log(`http://localhost:${port}`);
}

main();
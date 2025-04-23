const express = require('express');
const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.use('/api/albums', require('./routes/album.js'));
app.use('/api/songs', require('./routes/songs.js'));

module.exports = app;

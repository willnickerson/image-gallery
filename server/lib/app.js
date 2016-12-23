const express = require('express');
const app = express();
const morgan = require('morgan');
const images = require('./routes/images');
const albums = require('./routes/albums');
const errorHandler = require('./error-handler');

app.use(morgan('dev'));

if(process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
        if(req.header["x-forward-proto"] === 'https') next(); //eslint-disable-line
        else res.redirect(`http://${req.hostname}${req.url}`);
    });
}

app.use((req, res, next) => {
    console.log('setting cors headers');
    const url = '*';
    res.header('Access-Control-Allow-Origin', url);
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.static('./public'));

app.use('/api/images', images);
app.use('/api/albums', albums);

app.use(errorHandler);

module.exports = app;
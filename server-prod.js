const config = require('./config');

const path = require('path');
const express = require('express');
const proxy = require('express-http-proxy');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));

const env = process.env.NODE_ENV == 'dev' 
  ? require('./config/dev.env')
  : require('./config/prod.env');

app.use('/api', proxy(env.serverHost, {
  proxyReqPathResolver (req) {
    const path = require('url').parse(req.url).path;
    return `${env.serverApiBasePath}/${path}`;
  }
}));

/*
* Run app
*/
const port = 8080;
app.listen(port, () => { console.log(`App listening on port ${port}...`)});

const express = require('express');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
const devPort = 4000;

if(process.env.NODE_ENV === 'development') {
    console.log('Server is running on development mode');
    const config = require('../webpack.dev.config');
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(
        devPort, () => {
            console.log('webpack-dev-server is listening on port', devPort);
        }
    );
}

app.use('/', express.static(__dirname + './../public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CONNECT TO MONGODB SERVER
let db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("Connected to mongodb server");
});
// mongoose.connect('mongodb://username:password@host:port/database=');
mongoose.connect('mongodb://localhost/dbname');

// Route
const posts = require('./routes/index');

app.listen(port, () => {
    console.log("Express server has started on port " + port)
});

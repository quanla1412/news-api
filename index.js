const express = require('express');
const route = require('./routes');

const db = require('./config/db');
db.connect();

const app = express();


app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

route(app);

app.listen(3000, function () {
    console.log('Example app listening on port 3000');
});
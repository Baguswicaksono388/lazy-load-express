const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
/*CORS*/ 
let corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}
app.use(cors(corsOptions));

// Call models
const dbBelajar = require('./config/db');
dbBelajar.sync();
require('./models/cart/index').sequelize.sync();

try {
    dbBelajar.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

// Call Routes
const routesArticle = require('./routes/routes');
app.use('/article', routesArticle);
app.use('/auth', require('./routes/routeUsers'));
app.use('/category-goods', require('./routes/routeCategoryGoods'));
app.use('/goods', require('./routes/routeGoods'));
app.use('/carts', require('./routes/routeCarts'));


// Declare PORT Express
const PORT = process.env.PORT_EXPRESS;
app.listen(PORT, () => {
    console.log(`Server started on port `, PORT);
});
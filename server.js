const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');

const helpers = require('./utils/helpers');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'bigredcat',
    cookie: {
        //session will expire in 10 minutes
        expires: 10 * 60 * 1000
},
resave: true,
saveUninitialized: true,
rolling:true,
store: new SequelizeStore({
    db: sequelize
}),
};





}
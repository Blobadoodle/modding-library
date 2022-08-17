require('dotenv').config();

const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const mongoose = require('mongoose');

const port = process.env.PORT | 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
//app.use(helmet());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000} // 1 Day
}));
app.use(morgan('dev'));
app.use('/', require('./routes/main.js'));
app.use('/admin', require('./routes/admin.js'));
app.set('view engine', 'ejs');

mongoose.connect(process.env.DBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
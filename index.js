require('dotenv').config();

const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('./models/User');

const port = process.env.PORT | 3000;
const app = express();

passport.use(require('./auth').init());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
//app.use(helmet());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000} // 1 Day
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'));
app.use('/', require('./routes/main.js'));
app.use('/admin', require('./routes/admin.js'));
app.use('/api', require('./routes/api.js'));
app.set('view engine', 'ejs');

mongoose.connect(process.env.DBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(port, async () => {
    console.log(`Listening on port ${port}`);
    const users = await User.find();
    console.log(users);
});
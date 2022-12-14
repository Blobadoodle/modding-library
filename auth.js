const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('./models/User');
const LocalStrategy = require('passport-local');

function init() {
    return new LocalStrategy((username, password, done) => {
        User.findOne({username}, (err, user) => {
            if(err) return done(err);
            if(!user) return done(null, false);

            bcrypt.compare(password, user.password, (err, result) => {
                if(err) return done(err);
                if(!result) return done(null, false);

                return done(null, user);
            });
        });
    });
}

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        if(err) return done(err);
        if(!user) return done(null, false);

        done(null, user);
    });
});

module.exports.init = init;
const router = require('express').Router();
const passport = require('passport');

// Non-priviliged gateways

router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
    res.redirect('/admin');
});

router.all('*', (req, res, next) => {
    if(req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/login');
    }
});

// Privileged gateways

router.post('/phone', passport.authenticate('session', { failureRedirect: '/login' }), (req, res) => {
    console.log(req.body);
    res.redirect('/admin/newpost');
});

router.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect('/');
    });
});

module.exports = router;
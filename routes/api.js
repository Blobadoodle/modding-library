const router = require('express').Router();
const passport = require('passport');

router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
    res.redirect('/admin');
});

router.post('/phone', passport.authenticate('session', { failureRedirect: '/login' }), (req, res) => {
    console.log(req.body);
    res.redirect('/admin/newpost');
});

module.exports = router;
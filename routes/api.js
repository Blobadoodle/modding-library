const router = require('express').Router();
const passport = require('passport');

router.get('/login', passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/admin'}), (req, res) => {
    res.redirect('/admin');
});

module.exports = router;
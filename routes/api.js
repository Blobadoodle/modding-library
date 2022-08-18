const router = require('express').Router();
const passport = require('passport');

router.post('/login', passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/admin'}), (req, res) => {
    res.redirect('/admin');
});

module.exports = router;
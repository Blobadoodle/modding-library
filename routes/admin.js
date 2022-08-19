const router = require('express').Router();
const passport = require('passport');

router.get('/', passport.authenticate('session', { failureRedirect: '/login' }), (req, res) => {
    res.render('admin/index'); 
});

router.get('/newpost', passport.authenticate('session', { failureRedirect: '/login' }), (req, res) => {
    res.render('admin/newpost'); 
});


module.exports = router;
const router = require('express').Router();

router.all('*', (req, res, next) => {
    if(req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/login');
    }
});

router.get('/', (req, res) => {
    res.render('admin/index', {user: req.user?.username}); 
});

router.get('/newpost', (req, res) => {
    res.render('admin/newpost', {user: req.user?.username}); 
});

router.get('/newbrand', (req, res) => {
    res.render('admin/newbrand', {user: req.user?.username}); 
});

module.exports = router;
const router = require('express').Router();

router.all('*', (req, res, next) => {
    if(req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/login');
    }
});

router.get('/', (req, res) => {
    res.render('admin/index'); 
});

router.get('/newpost', (req, res) => {
    res.render('admin/newpost'); 
});

router.get('/newbrand', (req, res) => {
    res.render('admin/newbrand'); 
});

module.exports = router;
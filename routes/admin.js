const router = require('express').Router();
const Manufacturer = require('../models/Manufacturer');

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

router.get('/newpost', async (req, res) => {
    const brands = await Manufacturer.find({});
    res.render('admin/newpost', {user: req.user?.username, brands}); 
});

router.get('/newbrand', (req, res) => {
    res.render('admin/newbrand', {user: req.user?.username}); 
});

module.exports = router;
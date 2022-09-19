const router = require('express').Router();
const passport = require('passport');
const Manufacturer = require('../models/Manufacturer.js');
const Phone = require('../models/Phone.js');

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

router.post('/phone', async (req, res) => {
    const phone = { ...req.body };
    phone.sections = JSON.parse(phone.sections);
    phone.addedby = req.user._id;

    const newphone = new Phone(phone);
    await newphone.save();
    console.log(phone);
    res.redirect('/admin/newpost');
});

router.post('/brand', async (req, res) => {
    const { name } = req.body;
    const brand = new Manufacturer({
        name,
        addedby: req.user._id
    });
    await brand.save();
    res.redirect('/admin/newbrand');
});

router.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect('/');
    });
});

module.exports = router;
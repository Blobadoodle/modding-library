const router = require('express').Router();
const Phone = require('../models/Phone.js');
const Manufacturer = require('../models/Manufacturer.js');

router.get('/', async (req, res) => {
    const phonesObj = [];

    const brands = await Manufacturer.find({});
    for(const brand of brands) {
        const obj = {};
        obj.name = brand.name;
        const phones = await Phone.find({brand: brand._id});
        obj.phones = phones;
        phonesObj.push(obj);
    }

    res.render('index', {phones: phonesObj, user: req.user?.username}); 
});

router.get('/phone/:name', async (req, res) => {
    const phone = await Phone.find({name: decodeURIComponent(req.params.name)});
    if(!phone) return res.status(404);
    console.log(phone);
    res.render('phone', {user: req.user?.username, phone: phone[0]});
});

router.get('/login', (req, res) => {
    res.render('login', {user: req.user?.username});
});

module.exports = router;
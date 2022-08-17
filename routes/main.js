const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index', {phones: [ {name: 'Realme', phones: [{name: 'Realme 7', image: '/images/realme7.png', _id: 'e621'}] } ]}); 
});

router.get('/phone/e621', (req, res) => {
    res.render('phone');
});

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;
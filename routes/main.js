const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index'); 
});

router.get('/phone/e621', (req, res) => {
    res.render('phone');
});

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;
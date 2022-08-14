const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index'); 
});

router.get('/phone/e621', (req, res) => {
    res.render('phone');
});

module.exports = router;
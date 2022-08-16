const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('admin/index'); 
});

router.get('/newpost', (req, res) => {
    res.render('admin/newpost'); 
});


module.exports = router;
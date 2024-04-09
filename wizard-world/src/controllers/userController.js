const router = require("express").Router();

//Registration
router.get('/register', (req, res) => {
    res.render('user/register')
});

router.post('/register', (req, res) => {
    const { firstName, lastName, email, password, repeatPassword } = req.body;
    res.redirect('/users/login');
});


//Login
router.get('/login', (req, res) => {
    res.render('user/login');
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    res.redirect('/')
});


//Logout


module.exports = router;
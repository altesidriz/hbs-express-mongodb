const router = require("express").Router();
const creatureService = require("../services/creatureSevrice");

router.get('/all', (req, res) => {
    res.render("post/all-posts")
});





router.get('/create', (req, res) => {
    res.render("post/create")
});

router.post('/create', async (req, res) => {

    const { name, species, skin, eye, image, description } = req.body;
    const payload = { name, species, skin, eye, image, description, owner:req.user };
    await creatureService.create(payload);
    res.redirect('/posts/all')
});



router.get('/profile', (req, res) => {
    res.render("post/profile")
});



module.exports = router
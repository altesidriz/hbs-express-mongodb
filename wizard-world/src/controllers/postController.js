const router = require("express").Router();
const creatureService = require("../services/creatureSevrice");

router.get('/all', async (req, res) => {
    const creatures = await creatureService.getAll().lean();
    res.render("post/all-posts", { creatures });
});



router.get('/create', (req, res) => {
    res.render("post/create")
});

router.post('/create', async (req, res) => {

    const { name, species, skin, eye, image, description } = req.body;
    const payload = { name, species, skin, eye, image, description, owner: req.user };
    await creatureService.create(payload);
    res.redirect('/posts/all')
});



router.get('/profile', async (req, res) => {
    const { user } = req;

    const myCreatures = await creatureService.getMyCreatures(user?._id).lean();
    res.render("post/profile", { myCreatures })
});


router.get('/:creatureId/details', async (req, res) => {
    const { creatureId } = req.params;
    console.log({ creatureId });

    const creature = await creatureService.singleCreature(creatureId).lean();
    const { user } = req;
    const { owner } = creature;
    const isOwner = user?._id === owner.toString();

    res.render('post/details', { creature, isOwner });
});

router.get("/:creatureId/edit", async (req, res) => {
    const { creatureId } = req.params;
    const creature = await creatureService.singleCreature(creatureId).lean();

    res.render('post/edit', { creature })
});

router.post("/:creatureId/edit", async (req, res) => {
    const { creatureId } = req.params;
    const { name, species, skin, eye, image, description } = req.body;
    const payload = { name, species, skin, eye, image, description, owner: req.user };

    await creatureService.updateCreature(creatureId, payload);

    res.redirect(`/posts/${creatureId}/details`)
});

router.get("/:creatureId/delete", async (req, res) => {
    const { creatureId } = req.params;
    await creatureService.delete(creatureId);
    res.redirect('/posts/all');
});

module.exports = router
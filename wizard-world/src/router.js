const router = require("express").Router();
const homeController = require("./controllers/homeController.js");
const userController = require("./controllers/userController.js");
const allPostsControler = require("./controllers/postController.js");

//todo endpoints with controlers
router.use(homeController);
router.use('/users', userController);
router.use('/posts', allPostsControler);
router.get('*', (req, res)=>{
    res.redirect('/404')
})

module.exports = router;
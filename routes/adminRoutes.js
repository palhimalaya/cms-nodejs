const express = require('express');
const router = express.Router();
const admincontroller = require('../controllers/admincontroller');

router.all('/*', (req, res, next) => {

    req.app.locals.layout = 'admin';

    next();
})




router.route('/')
    .get(admincontroller.index);

router.route('/posts')
    .get(admincontroller.getPosts)

router.route('/posts/create')
    .get(admincontroller.createPosts)
    .post(admincontroller.submitPosts);
module.exports = router;
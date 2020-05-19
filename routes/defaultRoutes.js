const express = require('express');
const router = express.Router();
const defaultcontroller = require('../controllers/defaultcontroller');

router.all('/*', (req, res, next) => {

    req.app.locals.layout = 'default';

    next();
})

router.route('/')
    .get(defaultcontroller.index);

router.route('/login')
    .get(defaultcontroller.loginGet)
    .post(defaultcontroller.loginPost);
router.route('/register')
    .get(defaultcontroller.registerGet)
    .post(defaultcontroller.registerPost);


module.exports = router;
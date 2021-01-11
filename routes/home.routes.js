const router = require('express').Router();

const controller = require('../controllers/home.controller');

router.get('/', controller.getUrls)

router.get('/:shortUrl', controller.getUrl)

router.post('/',controller.postHome)

module.exports = router
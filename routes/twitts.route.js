const { Router } = require('express');
const { twittsController } = require('../controllers/twitts.controller');
const router = Router();

router.post('/twitts', twittsController.postTwitt);
router.patch('/twitts/:id/likes', twittsController.addLike);
router.get('/twitts', twittsController.getTwitt );
router.delete('/twitts/:id', twittsController.deleteTwitt)


module.exports = router;
const { Router } = require('express');
const { commentsController } = require('../controllers/сomments.controller');
const router = Router();

router.post('/comments', commentsController.postComment);
router.get('/comments', commentsController.getComment)
router.delete('/comments/:id', commentsController.deleteComment)
router.get('/comments', commentsController.getCommentsByUser)

module.exports = router;
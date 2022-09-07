const {getComments, getCommentById, postComment, putComment, deleteComment} = require('./Controllers/comment') 
const {Router} = require('express')

const router = Router()

router.get('/', getComments)
router.get('/:id', getCommentById)
router.post('/', postComment)
router.put('/:id', putComment)
router.delete('/:id', deleteComment)

module.exports = router
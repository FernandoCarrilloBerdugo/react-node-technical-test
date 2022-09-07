const {getComments, getCommentById, postComment, putComment} = require('./Controllers/comment') 
const {Router} = require('express')

const router = Router()

router.get('/', getComments)
router.get('/:id', getCommentById)
router.post('/', postComment)
router.put('/:id', putComment)

module.exports = router
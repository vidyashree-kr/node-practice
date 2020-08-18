const postController=require('../controllers/post')
const express=require('express')
const validator=require('../validator')

const router=express.Router()
router.get('/',postController.getPosts)
router.post('/post', validator.createPostValidator,postController.createPost)

exports.router = router;

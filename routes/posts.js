const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GETS BACK ALL THE POSTS
router.get('/', async (req,res) => {
    try{
        const posts = await Post.find(); // find() is a Mongoose method to return all the posts
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

// SUBMITS A POST
router.post('/', async (req,res) => { // a method for sending data from the body of application to be stored in database
                                // must follow the schema we set up in /models/Post.js
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
    const savedPost = await post.save()
    res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
});


// GET SPECIFIC POST
router.get('/:postId', async (req,res) => {
    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
    }catch(err){
        res.json({message:err});
    }
});

// DELETE A POST
router.delete('/:postId', async (req,res) => {
    try{
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
        }catch(err){
            res.json({message:err});
        }
});

// UPDATE A POST
router.patch('/:postId', async (req,res) => {
    try{
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId}, 
            {$set: {title: req.body.title}}
            );
        res.json(updatedPost);
        }catch(err){
            res.json({message:err});
        }
});




module.exports = router;
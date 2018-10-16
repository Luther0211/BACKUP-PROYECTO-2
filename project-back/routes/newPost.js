const express = require('express');
const router  = express.Router();
//const path = require('path')
const Post = require('../models/Post')
const User = require('../models/User')
const {verifyToken} =require('../helpers/jwt')
//
const multer = require('multer')
const upload = multer({ dest: './public/pics/' })
//uploadcloud




router.post('/', verifyToken, (req,res,next)=>{
    //console.log('kestapasandaa')
    Post.create(req.body)
    .then(post=>{
        User.findByIdAndUpdate(req.user._id, {
        $push: {post: post._id}
        
    }).then( p =>{
            console.log(p)
            res.status(200).json(p)
        }).catch(e=>{
            console.log(e)
            res.json(e)
        })
    }).catch(e=>console.log(e))
})


router.get('/posts', (req,res,next) => {
    Post.find()
    then(posts =>{
        res.status(200).json(posts)
    }).catch(e=>{
        next(e)
    })
})

module.exports = router
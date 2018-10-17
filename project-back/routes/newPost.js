const express = require('express');
const router  = express.Router();
//const path = require('path')
const Post = require('../models/Post')
const User = require('../models/User')
//
const multer = require('multer')
const upload = multer({ dest: './public/pics/' })
const uploadCloud = require('../helpers/cloudinary')




router.post('/', uploadCloud.single('image'),(req,res,next)=>{
    //*****//
    console.log(req.body)
    if(req.file)req.body.imageURL = req.file.url
    Post.create(req.body)
        .then(post=>{
            console.log(post)
            User.findByIdAndUpdate("5bc6940642150c3b629b2ec3",{
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

//////////

router.get('/', (req,res,next) => {
    Post.find()
    then(posts =>{
        res.status(200).json(posts)
    }).catch(e=>{
        next(e)
    })
})

module.exports = router
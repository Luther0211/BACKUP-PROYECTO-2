const express = require('express');
const router  = express.Router();
//const path = require('path')
const Post = require('../models/Post')
const User = require('../models/User')
//
const multer = require('multer')
const upload = multer({ dest: './public/pics/' })







router.get('/', (req,res,next) => {
  //console.log('hola')
  Post.find()
    .then(data => {
      return res.status(200).json({
        ok: true,
        data
      })
    })
})




module.exports = router
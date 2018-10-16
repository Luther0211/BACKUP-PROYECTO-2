const express = require('express');
const router  = express.Router();
const path = require('path')
const Picture = require('../models/Picture')
//
const multer = require('multer')
const upload = multer({ dest: './public/pics/' })


router.post('/', upload.single('file'), (req,res,next)=>{
    if(req.file) req.body.link = '/pics/' + req.file.originalname
    req.body.user = req.user._id
    Picture.create(req.body)
    .then(pic=>res.status(200).json(pic))
    .catch(e=>next())
})

module.exports = router
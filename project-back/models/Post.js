const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: String,
    pictures:[
      {
          type: Schema.Types.ObjectId,
          ref: "Picture"
      }
    ],
    description:String,
    animalType:{
      type:String,
      enum:['Dog', 'Cat', 'Bird', 'Reptile', 'Rodent', 'Fish', 'Other'],
      default:"Dog"
    },  
    animalSize:{
      type:String,
      enum:['Small', 'Medium', 'Big'],
      default:"Medium"
    },
    address:String,
    phoneNumber:String,
    email:String
  },{
    timestamps:{
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
})

module.exports = mongoose.model('Post', postSchema)

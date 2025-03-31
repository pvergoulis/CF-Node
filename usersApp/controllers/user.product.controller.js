const User = require('../models/user.model')

exports.findAll = async(req,res)=>{
  console.log('Find all users product')

  try {
    const result = await User.find({},{username:1,products:1,_id:0})
    res.status(200).json({status:true, data: result})
  } catch (error) {
    console.log("Problem in finding all user's product", error)
    res.status(400).json({status: false, data: error})
  }
}

exports.findOne = async(req,res)=>{
  console.log('Find products for a specific user')
  const username = req.params.username

  try {
    const result = await User.findOne({username:username}, {username:1, products:1, _id:0})
    res.status(200).json({status:true, data: result})
  } catch (error) {
    console.log("Problem in finding user's product", error)
    res.status(400).json({status: false, data: error})
  }
}

exports.create = async(req,res)=>{
  console.log("Insert products to user")
  const username = req.body.username
  const products = req.body.products

  try {
    const result = await User.updateOne(
      {username : username},
      {
        $push: {
          products: products
        }
      }
    )
    res.status(200).json({status:true, data:result})
  } catch (error) {
    console.log('Error', error)
    res.status(400).json({status: false , data : error})
  }

}

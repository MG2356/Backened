const mongoose=require('mongoose')

const ProductSchema=new mongoose.Schema({
    productImage:String,
    productName:String,
    productMRP:String,
    productPrice:String,
    productType:String,
    productDescription:String,
    status: String
})
const ProductModel=mongoose.model("ProductDetail",ProductSchema)
module.exports=ProductModel
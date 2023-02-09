const mongoose = require('mongoose');

const Schema = require('mongoose').Schema;

//categories => field => ['type','color']
const categories_model = new Schema({
    type:{type:String, default:"Investment"},
    color:{type:String, default:"#fcbe44"}
})

//transactions => field => ['name','type','date']

const transactions_model = new Schema({
    name:{type:String,default:"Anonymous"},
    type:{type:String,default:"Investment"},
    amount:{type:Number},
    date:{type:Date,default:Date.now}
})

const Categories = mongoose.model('categories',categories_model);
const Transaction = mongoose.model('transaction',transactions_model);

exports.default = Transaction;
module.exports = {
    Transaction,
    Categories
}
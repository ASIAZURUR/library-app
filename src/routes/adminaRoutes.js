const express=require("express");
const adminAuthorRouter=express.Router();
const Authordata=require('../model/Authordata')
function find(nav)
{adminAuthorRouter.get('/',function(req,res){
    res.render('addAuthor',{
        nav,
        title:'Library'
    })
})
adminAuthorRouter.post('/add',function(req,res){
    var content={
        name: req.body.name,
        books:req.body.books,
        details:req.body.details,
        image:req.body.image}
 var author = Authordata(content);
 author.save();//saving to database
 res.redirect('/authors');

})
return adminAuthorRouter
}
module.exports=find;
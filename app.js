const express=require('express');
const app=express();
const nav=[
    {
        link:'/books',name:'Books'
    },
    {link:'/authors',name:'Authors'
},
{
    link:'/admin',name:'Add Book'
},
{
    link:'/admin1',name:'Add Author '
},
{link:'/signup',name:'Sign up'},
{link:'/login',name:'Login'}

]
const loginRouter=require('./src/routes/loginRoutes')(nav);
const signupRouter=require('./src/routes/signupRoutes')(nav);
const booksRouter=require('./src/routes/bookRoutes')(nav);
const adminRouter=require('./src/routes/adminRoutes')(nav);
const adminAuthorRouter=require('./src/routes/adminaRoutes')(nav);
const authorsRouter=require('./src/routes/authorRoutes')(nav);
app.use(express.urlencoded({extended:true}));

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/books',booksRouter);
app.use('/admin',adminRouter);
app.use('/admin1',adminAuthorRouter);
app.use('/authors',authorsRouter);
app.get('/',function(req,res){
    res.render("index",
    {
       nav,
       title:'Library' 
       
    });
});

app.listen(process.env.PORT || 5002);
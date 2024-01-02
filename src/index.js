//index.js
const path = require('path');
const express = require('express');
const morgan = require("morgan");
const methodOverride = require('method-override');
const { engine } = require('express-handlebars');
// const handlebars = require('express-handlebars'); 
const route = require('./routes');
const db = require('./config/db');
const handlebarsHelpers = require('handlebars-helpers')();
const session = require('express-session');




const authMiddleware = require('./middleware/authMiddleware'); 
const cookieParser = require('cookie-parser');


//Connect DB
db.connect();


const app = express();
const port = 3000
//HTTP logger
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))
//
app.use(express.urlencoded({
  extended: true
}));
//gửi từ JS lên để xử lý
app.use(express.json());

app.use(session({
  secret: 'your-secret-key',
  resave: true,
  saveUninitialized: true
}));

app.use(methodOverride('_method'))

//XMLHttpReques, fetch
//Route init




// Apply authMiddleware to specific routes
// app.use(['/exam', '/exam/create', '/exam/insertfile', '/exam/:id/edit'], authMiddleware);
app.use(cookieParser());




//template engine
//hbs:handlebars
app.engine('hbs', engine({
  extname: '.hbs',
  helpers:{
    sum :(a,b)=>a+b,
    ...handlebarsHelpers

  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

route(app);



//127.0.0.1
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
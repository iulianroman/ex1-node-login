// server.js


const express  = require('express');
const app      = express();
const port     = process.env.PORT || 3000;
const mongoose = require('./config/database.js');
const passport = require('passport');
const flash    = require('connect-flash');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const expressSession = require('express-session');
require('./config/passport')(passport); 

//app.use(express.logger('dev')); // log every request to the console
app.use(cookieParser()); 
app.use(bodyParser.urlencoded({
    extended: true
	}));

app.set('view engine', 'ejs'); 

const session = {
	secret: "LoxodontaElephasMammuthusPalaeoloxodonPrimelephas",
	cookie: {},
	resave: false,
	saveUninitialized: false
  };
	  
app.use(expressSession(session)); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 


require('./app/routes.js')(app, passport); 


app.listen(port, () => {
	console.log(`Listening to requests on http://localhost:${port}`);
  });


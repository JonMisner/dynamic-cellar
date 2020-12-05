const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const dbConnection = require('./database');
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');
const app = express();
const PORT = 8000;
const cors = require('cors');
// Route requires
const user = require('./routes/user');

// MIDDLEWARE
app.use(morgan('dev'));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cors());

// Sessions
app.use(
  session({
    secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false, //required
    saveUninitialized: false, //required
  })
);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('/build')); // serve the static react app
  app.get(/^\/(?!api).*/, (req, res) => {
    // don't serve api routes to react app
    res.sendFile(path.join(__dirname, './build/index.html'));
  });
  console.log('Serving React App...');
}

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

// Routes
app.use('/api/user', user);

// app.post('/api/user', (req, res) => {
//   console.log('THE ROUTE IS HIT');
// });

// Starting Server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
const express = require('express'); // includes the package in this file
const app = express(); // execute express
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

// Import Routes
const postsRoute = require('./routes/posts');

//MIDDLEWARE
app.use(bodyParser.json()); // need this to take what's in the body of post and prase it to JSON so our API will understand it
app.use('/posts', postsRoute);
 

//ROUTES
app.get('/', (req,res)=> {
    res.send('We are on home');
    // res = respond to the user
    // .send = respond by sending a string
});

mongoose.set('useNewUrlParser', true); // had to include these b/c of changes since Mongoose was last updated
mongoose.set('useUnifiedTopology', true);
// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => console.log('connected to DB!')
);

    // how do we start listening to the server? 
app.listen(3000);
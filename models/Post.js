// this is a model for data that represents a user Post or something

const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {                            // title, descr., and date are all using objects to describe their requirements
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// then you export it and this is what Mlab, AKA mongodbAtlas, will pull and put in your database
module.exports = mongoose.model('Posts', PostSchema);
                            // name your model, and pass the schema it should use (the one you just made above)
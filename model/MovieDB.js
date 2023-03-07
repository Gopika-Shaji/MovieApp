const mongoose = require("mongoose");

//connect to mongoose DB
mongoose.connect("mongodb+srv://ggopikashaji08:gopika08@cluster0.fdhfl62.mongodb.net/?retryWrites=true&w=majority");

//Create Schema
const Schema = mongoose.Schema;

var movieSchema  = new Schema({
    m_name: String,
    m_actor: String,
    m_actress: String,
    m_director: String,
    m_release: Date,
    m_camera: String,
    m_producer: String,
    m_language: String
});

var MovieInfo = mongoose.model("movies", movieSchema);

module.exports = MovieInfo;
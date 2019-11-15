const Movies = require('./../models/movies');
const databaseURI = 'mongodb://localhost/starter-code';

const mongoose = require('mongoose');

mongoose
  .connect(databaseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

let arr = [
    {
        title : "the death",
        genre : "thriller",
        plot : "death"
    },
    {
      title : "the life",
      genre : "horror",
      plot : "life"
    },
    {
      title : "the wake",
      genre : "love",
      plot : "the wake"
    }
]

Movies.create(arr)
    


const Celebrities = require('./../models/celebrities');
const databaseURI = 'mongodb://localhost/starter-code';

const mongoose = require('mongoose');

mongoose
  .connect(databaseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

let arr = [
    {
        name : "Tom Hanks",
        occupation : "Actor",
        catchPhrase : "life is like a box of chocolates"
    },
    {
        name : "Lissy Gunder",
        occupation : "Drug Lord",
        catchPhrase : "There is never too much coke..."
    },
    {
        name : "Keanu Reeves",
        occupation : "Actor",
        catchPhrase : "We are in the matric bla bla bla..."
    }
]

Celebrities.create(arr)
    


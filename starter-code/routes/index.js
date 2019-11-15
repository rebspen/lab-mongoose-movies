const express = require('express');
const router = express.Router();

const Celebrities = require('./../models/celebrities');

// Handle GET request for website root
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/celebrities/edit', (req, res, next) => {
  res.render('celebrities/edit');
});

router.get('/celebrities', (req, res, next) => {
  Celebrities.find()
    .then( celeb => {
      res.render('celebrities/index', { celeb });
    })
    .catch(error => {
      next(error);
    });
});

router.get('/celebrities/:id', (req, res, next) => {
  const celebId = req.params.id;
  Celebrities.findById(celebId)
    .then(celeb => {
      res.render('celebrities/show', { celeb });
    })
    .catch(error => {
      next(error);
    });
});

router.post('/create', (req, res, next) => {
  Celebrities.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(document => {
      res.redirect(`/celebrities/${document._id}`);
    })
    .catch(error => {
      next(error);
    });
})

router.post('/celebrities/:postId/delete', (req, res, next) => {
  const postId = req.params.postId;
  Celebrities.findByIdAndDelete(postId)
    .then(data => {
      console.log(data);
      res.redirect(`/celebrities`);
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;

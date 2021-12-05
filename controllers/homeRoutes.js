const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      // include: [
      //   {
      //     model: User
      //   }
      // ],
      order: [['createdAt', 'DESC']],
    })

    const posts = postData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
    // res.json(posts)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/createPost', (req,res) => {
  if(!req.session.logged_in) {
    res.render('login');
    return;
  }
  res.render('createPost', {
    logged_in: req.session.logged_in,
    createForm: true
  })
})

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/post/:id', async (req, res) => {
  try {

    const posts = await Post.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: User,
          attributes: {exclude: ['password']},
        },
        {
          model: Comment,
          order: [['createdAt', 'DESC']],
          required: false
        }
      ],
      // raw:true
    })
    // posts = posts.toJSON()
    console.log(posts)
    res.render('post', {
      posts,
      logged_in: req.session.logged_in,
    })
    // res.json(posts)
  } catch (err) {
    res.json(err)
  }

})

router.get('/signup', (req,res)=> {
  res.render('signupForm', {
    createUser:true
  })
})

module.exports = router;

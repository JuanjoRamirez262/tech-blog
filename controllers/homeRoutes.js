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
          order: [['createdAt', 'DESC']]
        }
      ],
      order: [['createdAt', 'DESC']],
    })
    // const posts = postData.map((project) => project.get({ plain: true }));
    // res.render('post', {
    //   posts,
    //   logged_in: req.session.logged_in,
    // })
    res.json(posts)
  } catch (err) {
    res.json(err)
  }

})

module.exports = router;

const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', (req,res) => {
    // add logic for new posts
    try {
        if(!req.session.logged_in){
            res.redirect('/login');
            return
        }
        Post.create({
            title: req.body.title,
            user_id: res.session.user_id,
            content: req.body.content
        })
    } catch (err) {
        res.status(400).json(err);
    }

});

router.delete('/', (req, res) => {
    // add logic to delete an existing post
})
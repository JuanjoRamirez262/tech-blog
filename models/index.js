const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment')

User.hasMany(Post, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    onDelete: 'CASCADE'
})

Post.hasMany(Comment, {
    onDelete: 'CASCADE'
})

Post.belongsTo(User)

Comment.belongsTo(Post)

Comment.belongsTo(User)

module.exports = { User, Post, Comment};

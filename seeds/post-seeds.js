const { Post } = require('../models');

const postData = [
    {
        title: "Example TITLE",
        post_content: "CONTENT OF TECH BLOG GOES IN HERE ",
        user_id: 3
    },
    {
        title: "Example TITLE",
        post_content: "CONTENT OF TECH BLOG GOES IN HERE ",
        user_id: 1
    },
    {
        title: "Example TITLE",
        post_content: "CONTENT OF TECH BLOG GOES IN HERE ",
        user_id: 2

    },
    {
        title: "Example TITLE",
        post_content: "CONTENT OF TECH BLOG GOES IN HERE ",
        user_id: 5
    },
    {
title: "Example TITLE",
        post_content: "CONTENT OF TECH BLOG GOES IN HERE ",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

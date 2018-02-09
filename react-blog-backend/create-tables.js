const User = require('./models/user');
const Post = require('./models/post');
const Comment = require('./models/comment');

User.sync({force: true})
  .then(() => {
    return Post.sync({force: true})
  })
  .then(() => {
    return Comment.sync({force: true})
  }).then(() => {
    User.bulkCreate([{
      firstName: 'Seth',
      lastName: 'Zimbo'
      },
      {
        firstName: 'Jim',
        lastName: 'Bo'
      }]
    );
  }).then(() => {
    Post.bulkCreate(
      [{
        title: 'First post',
        content: 'It was the best of times, it was the worst of times',
        userId: 1
      },
      {
        title: 'WOOHOO',
        content: 'Yowza',
        userId: 2
      },
      {
        title: 'HEY',
        content: 'YOU ARE SILLY',
        userId: 1
      },
      {
        title: 'WHAT',
        content: 'GJAHHJ',
        userId: 2
      }
    ]
    );
  })
  

  

  
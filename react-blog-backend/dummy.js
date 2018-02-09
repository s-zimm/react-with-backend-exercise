const User = require('./models/user');
const Post = require('./models/post');

User.create({
  firstName: 'Seth',
  lastName: 'Zimbo'
  },
  {
    firstName: 'Jim',
    lastName: 'Bo'
  }
);

Post.create({
  title: 'First post',
  content: 'It was the best of times, it was the worst of times',
  userId: 1
  },
  {
    title: 'WOOHOO',
    content: 'Yowza',
    userId: 2
  }
);





// Post.create({
//   title: 'First post!',
//   content: 'It was the best of times, it was the worst of times'
// }).then(post => {
//   post.setUser(me);
//   // post.setComments([])
//   post.save();
// });

// me.save();


// User.findOne({
//   where: {
//     id: 1
//   }
// }).then(author => {
//   // now! create a post!
//   Post.create({
//     title: 'First post!',
//     content: 'It was the best of times, it was the worst of times'
//   }).then(post => {
//     post.setUser(author);
//     // post.setComments([])
//     post.save();
//   })


//   // Another way:
//   let anotherPost = Post.build({ title: 'tres', content: 'please work' });
//   anotherPost.setUser(author);

// })




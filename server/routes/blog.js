const Blog = require('../models/blog');

class blog {
   
   async newPost( blog_post ) {
      let blog = new Blog({
         post: blog_post,
         createdAt: new Date(Date.now())
      });
      try {
        let insert = await blog.save();
        return insert;
      } catch( err ) {
        return { 'Error' : err };
      }
   }

   async getPosts(){
      try{
        let posts = await Blog.find({}, function(err, collection) {
            return { posts : collection };
        }).sort({ createdAt: -1 });
        return posts;
      } catch( err ) {
         return { 'Error' : err };
      }
   }

}

module.exports = blog;

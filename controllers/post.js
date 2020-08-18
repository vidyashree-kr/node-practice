const Post=require('../models/post')

exports.getPosts = (req, res) => {
  res.json({
    posts: [{ title: "First title" }, { title: "Second title" }],
  });
};

exports.createPost=(req,res)=>{
    const post=new Post(req.body)
    post.save().then(result=>{
        res.status(200).json({
            post:result
        })
    })
    console.log('creating post',req.body)
}

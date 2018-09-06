var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodeauth');
var db = mongoose.connection;

// User Schema
var PostSchema = mongoose.Schema({
	title: {
		type: String,
		index: true
	},
	category: {
		type: String
	},
	body: {
		type: String
	},
    date: {
        type:Date
    },
    mainimage:{
        type:String
    },
	author:{
		type: String
	},
    username:{
        type: String
    }
});

var Post = module.exports = mongoose.model('Post', PostSchema);
// Fetch All posts
module.exports.getPost = function(callback, limit){
	Post.find(callback).limit(limit);
}

module.exports.getPostById = function(id, callback){
	Post.findById(id, callback);
}

module.exports.getPostByUsername= function(username, callback){
    var query={username:username}; 
	Post.find(query, callback);
}
module.exports.getPostByCategory= function(category, callback){
    var query={category:category}; 
	Post.find(query, callback);
}

module.exports.createPost = function(newPost, callback){
	
   			newPost.save(callback);
    	}
	
const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const MONGO_URL =  "mongodb+srv://nasir:5pcEwh7TQRtxQSK@cluster0.74zah.mongodb.net/blog?retryWrites=true&w=majority"

  
const conn = mongoose.createConnection(MONGO_URL, { useNewUrlParser: true });


const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    created_at: Date,
    updated_at: Date

})

const postSchema = new Schema({
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
});

const PostModel = conn.model("Posts", postSchema);

const UserModel = conn.model("Users", userSchema);






module.exports = {
    PostModel,
    UserModel,
    conn
}

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MONGO_USERNAME = 'nastech';
const MONGO_PASSWORD = 'nas8732';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'blog';



const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=blog`;

  
const conn = mongoose.createConnection(url, { useNewUrlParser: true });


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

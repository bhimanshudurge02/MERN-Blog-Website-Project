import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        image: {
            type: String,
            default: 'https://th.bing.com/th/id/OIP.E3rQza-2hXG4tA-LRX0J8wHaDt?w=335&h=174&c=7&r=0&o=5&dpr=1.1&pid=1.7'
        },
        category: {
            type:String,
            default:'uncategorized',
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
    },{timestamps: true}
);

const Post = mongoose.model('Post', postSchema);

export default Post;
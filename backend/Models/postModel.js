import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        topic: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Topics"
        },
        title: { type: String, trim: true, required: true },
        user: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            }
        ],
        content: { type: String, trim: true, required: true },
        likes: {
            type: Number,
            default: 0,
        },
    },
    { 
        timestamps: true 
    }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
import mongoose from "mongoose";

const topicsModel = mongoose.Schema(
    {
        topic : { type: String, trim: true},
    },
    {
        timestamps : true,
    }

);

const Topics = mongoose.model('Topics', topicsModel);

module.exports = Topics;
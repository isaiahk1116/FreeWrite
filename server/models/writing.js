import mongoose from 'mongoose';

const writingSchema = mongoose.Schema({
    message: String,
    creator: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const Writing = mongoose.model('Writing', writingSchema);

export default Writing;
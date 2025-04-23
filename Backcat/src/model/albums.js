const {Schema, model} = require('mongoose');

const AlbumSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    artist: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true,
        trim: true
    },
    coverImageUrl: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

module.exports = model('Album', AlbumSchema);
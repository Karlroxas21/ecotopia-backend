const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    question: String,
    choices: [String],
    weights: [String]
}, {collection: 'game_scene_5'});

const GameModelScene5 = mongoose.model('GameModelScene5', gameSchema);

module.exports = GameModelScene5;
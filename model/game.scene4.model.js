const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    question: String,
    choices: [String],
    weights: [String]
}, {collection: 'game_scene_4'});

const GameModelScene4 = mongoose.model('GameModelScene4', gameSchema);

module.exports = GameModelScene4;
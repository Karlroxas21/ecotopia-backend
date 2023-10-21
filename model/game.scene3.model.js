const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    question: String,
    choices: [String],
    weights: [String]
}, {collection: 'game_scene_3'});

const GameModelScene3 = mongoose.model('GameModelScene3', gameSchema);

module.exports = GameModelScene3;
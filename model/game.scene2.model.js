const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    question: String,
    choices: [String],
    weights: [String]
}, {collection: 'game_scene_2'});

const GameModelScene2 = mongoose.model('GameModelScene2', gameSchema);

module.exports = GameModelScene2;
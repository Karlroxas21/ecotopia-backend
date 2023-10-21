const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    question: String,
    choices: [String],
    weights: [String]
}, {collection: 'game_scene_1'});

const GameModelScene1 = mongoose.model('GameModelScene1', gameSchema);

module.exports = GameModelScene1;
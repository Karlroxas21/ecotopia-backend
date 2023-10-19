const mongoose = require('mongoose');

const { Schema } = mongoose;

const assessmentSchema = new Schema({
        trivia_game: [],
        pop_quiz: []
},
{collection: 'assessment'}
);

const AssessmentModel = mongoose.model('Assessment', assessmentSchema);

module.exports = AssessmentModel;



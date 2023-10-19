const mongoose = require('mongoose');

const { Schema } = mongoose;

const solutionsSchema = new Schema({
        solution_1: [String],
        solution_2: [String],
        solution_3: [String],
        solution_4: [String],
},{collection: 'solutions'}
);

const SolutionModel = mongoose.model('Solution', solutionsSchema);

module.exports = SolutionModel;
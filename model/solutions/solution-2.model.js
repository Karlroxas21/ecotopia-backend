const mongoose = require('mongoose');

const { Schema } = mongoose;

const otherSolutionsSchema = new Schema({
        header: String,
        header_description: String,
        descriptions: [String],
        bullets: {
                bullet_1: [String],
                bullet_2: [String],
                bullet_3: [String],
                bullet_4: [String],
                bullet_5: [String],
                bullet_6: [String],
                bullet_7: [String],
                bullet_8: [String]
        },
        links: [String],
        references: [String]
},
{collection: 'other_solution'}
);

const OtherSolutionModel = mongoose.model('OtherSolution', otherSolutionsSchema);

module.exports = OtherSolutionModel;
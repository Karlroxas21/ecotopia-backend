const mongoose = require('mongoose');

const { Schema } = mongoose;

const problemTrashSchema = new Schema({
        header: String,
        header_description: String,
        title: String,
        cases: {
                case1: [String],
                case2: [String],
                case3: [String],
                case4: [String]       
        },
        paragraphs: [String],
        references: [String]
        
},
{collection: 'problem_trash'}
);

const ProblemTrashModel = mongoose.model('ProblemTrash', problemTrashSchema);

module.exports = ProblemTrashModel;

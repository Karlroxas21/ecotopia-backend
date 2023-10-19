const mongoose = require('mongoose');

const { Schema } = mongoose;

const caseSchema = new Schema({
        header: String,
        header_description: String,
        title: String,
        cases: {
                case1: [String],
                case2: [String],
                case3: [String],
                case4: [String]
        }
},
{collection: 'cases'}
);

const CaseModel = mongoose.model('Case', caseSchema);

module.exports = CaseModel;

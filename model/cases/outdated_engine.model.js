const mongoose = require('mongoose');

const { Schema } = mongoose;

const outDatedEngineSchema = new Schema({
        header: String,
        header_description: String,
        title: String,
        cases: {
                case1: [String],
                case2: [String],
                case3: [String],
                case4: [String]
        },
        indicator_1: [String],
        indicator_2: [String],
        indicator_3: [String],
        indicator_4: [String],
        indicator_5: [String],
        references: [String]
        
},
{collection: 'outdated_engine'}
);

const OutDatedEngineModel = mongoose.model('OutDatedEngine', outDatedEngineSchema);

module.exports = OutDatedEngineModel;

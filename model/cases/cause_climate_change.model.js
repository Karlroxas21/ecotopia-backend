const mongoose = require('mongoose');

const { Schema } = mongoose;

const causeClimateChangeSchema = new Schema({
        header: String,
        header_description: String,
        title: String,
        cases: {
                case1: [String],
                case2: [String],
                case3: [String],
                case4: [String]
        },
        case3_content: [String],
        references: [String]
        
},
{collection: 'causes_climate_change'}
);

const CauseClimateChangeModel = mongoose.model('CauseClimateChange', causeClimateChangeSchema);

module.exports = CauseClimateChangeModel;

const mongoose = require('mongoose');

const { Schema } = mongoose;

const effectsClimateChangeSchema = new Schema({
        header: String,
        header_description: String,
        title: String,
        cases: {
                case1: [String],
                case2: [String],
                case3: [String],
                case4: [String]
        },
        case4_content: [String],
        references: [String]
        
},
{collection: 'effects_climate_change'}
);

const EffectsClimateChangeModel = mongoose.model('EffectsClimateChange', effectsClimateChangeSchema);

module.exports = EffectsClimateChangeModel;

const mongoose = require('mongoose');

const { Schema } = mongoose;

const respondingToClimateChangeSchema = new Schema({
        header: String,
        header_description: String,
        descriptions: [String],
        bullets:{
                bullet_1: [String],
                bullet_2: [String]
        },
        references: [String]
},{collection: 'responding_to_climate_change'}
);

const RespondingToClimateChangeModel = mongoose.model('RespondingToClimateChange', respondingToClimateChangeSchema);

module.exports = RespondingToClimateChangeModel;
const mongoose = require('mongoose');

const { Schema } = mongoose;

const currentIssuesSchema = new Schema({
        sea_level_rise_coastal_erosion: [String],
        sea_level_rise_coastal_erosion_2: [String],
        biodiversity_ecosystem_loss: [String],
        argriculture_food_security: [String],
        health_risk: [String],
        water_scarcity: [String],
        ocean_acidification: [String],
        references: [String]
},
{collection: 'current_issues_ph'}
);

const CurrentIssuesModel = mongoose.model('CurrentIssues', currentIssuesSchema);

module.exports = CurrentIssuesModel;



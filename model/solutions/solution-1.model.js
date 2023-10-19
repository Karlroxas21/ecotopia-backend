const mongoose = require('mongoose');

const { Schema } = mongoose;

const takeActionSchema = new Schema({
        header: String,
        header_description: String,
        bullets: {
                bullet_1: [String],
                bullet_2: [String],
                bullet_3: [String],
                bullet_4: [String],
                bullet_5: [String],
                bullet_6: [String],
                bullet_7: [String],
                bullet_8: [String],
                bullet_9: [String],
                bullet_10: [String],
                bullet_11: [String],
                bullet_12: [String],
                bullet_13: [String],
        },
        descriptions: [String],
        references: [String]
},
{collection: 'y_should_we_take_action'}
);

const TakeActionModel = mongoose.model('TakeAction', takeActionSchema);

module.exports = TakeActionModel;
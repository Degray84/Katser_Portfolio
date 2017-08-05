const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    WorksSchema = new Schema({
        name: {
            type: String,
            required: [true, 'Укажите наименование работы']
        },
        desc: {
            type: String,
            required: [true, 'Укажите технологии']
        },
        picture: {
            type: String
        }
    });

mongoose.model('works', WorksSchema);
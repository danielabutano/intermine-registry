/**
 * Intermine Registry Instance Model.
 *
 * Created by Leonardo on 5/27/2017.
 */
var mongoose = require('mongoose');

var mongoDB = 'mongodb://localhost/intermineregistry';
mongoose.connect(mongoDB);

var db = mongoose.connection;

var Schema = mongoose.Schema;

var schema = new Schema({
    id:                 String,
    name:               String,
    api_version:        String,
    web_version:        String,
    mine_version:       String,
    created_at:         Date,
    last_time_updated:  Date,
    neighbours:         [String],
    organisms:          [String],
    url:                String,
    description:        String,
    location:           {
        latitude:   String,
        longitude:  String
    },
    twitter:            String
},
    {
        collection: 'instances'
    }
);

var Instance = mongoose.model("instance", schema);

module.exports = Instance;
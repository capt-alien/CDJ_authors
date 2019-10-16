let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let authorSchema = new Schema({
    name: {
        type:String,
        trim: true,
        required:[true, "You need an author to put into the system!"],
        minlength:[4, "Name needs at least 4 charictors."]
    },
}, {timestamp:true});

// Model
mongoose.model('Author', authorSchema);

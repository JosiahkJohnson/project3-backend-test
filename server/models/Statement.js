const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StatementSchema = new Schema({
    //This is where I will store data about the user's stored statements
    //let me know what we need the database to store
});

//finalize the statment schema
const Statement = mongoose.model("Statement", StatementSchema);

//export it to be used in other files
module.exports = Statement;

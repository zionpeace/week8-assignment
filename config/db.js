const mongoose = require("mongoose");

async function dbConfig() {
    try{
        await mongoose.connect("mongodb+srv://emenejasher:Alignment19@cluster0.stsym.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Database connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConfig
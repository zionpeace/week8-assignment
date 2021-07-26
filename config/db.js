const mongoose = require('mongoose');

async function dbConfig() {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          autoIndex: true,
          useCreateIndex: true,
          useFindAndModify:false,

        });

        console.log("Database connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConfig
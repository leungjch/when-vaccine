const dotenv = require('dotenv');

// Get env variables
dotenv.config();

module.exports = {
    MONGO_USER : process.env.MONGO_USER,
    MONGO_DBNAME : process.env.MONGO_DBNAME,

    MONGO_PASSWORD : process.env.MONGO_PASSWORD
};

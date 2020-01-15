require('dotenv').config()
module.exports = {
    DB_NAME: process.env.DB_NAME,
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: 3000 || process.env.PORT
}
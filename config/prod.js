// prod.js - production keys here
module.exports = {
    jwtPayload: process.env.JWT_PAYLOAD,
    jwtSecret: process.env.JWT_SECRET,
    dbname: process.env.DB_NAME,
    dbuser: process.env.DB_USER,
    dbpw: process.env.DB_PASSWORD,
    nsdlSecretKey: process.env.NSDL_SECRET_KEY,
};

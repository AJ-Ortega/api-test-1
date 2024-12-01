const bcryptjs = require("bcryptjs");

const encrypt = async (passwordPlain) => {
    const hash = bcryptjs.hash(passwordPlain, 10);
    return hash;
};

const compare = async (passwordPlain, passwordHash) => {
    return await bcryptjs.compare(passwordPlain, passwordHash);
};

const desencrypt = async (passwordHash) => {
    return await bcryptjs.decrypt(passwordHash);
};

module.exports = {encrypt, compare, desencrypt};
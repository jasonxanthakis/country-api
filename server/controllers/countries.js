const Country = require('../models/Country.js');

const index = async (req, res) => {
    try {
        const data = await Country.getAll();
        res.status(200).send({ data: data });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = { index };
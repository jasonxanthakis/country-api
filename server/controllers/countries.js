const Country = require('../models/Country.js');

const index = async (req, res) => {
    try {
        const data = await Country.getAll();
        res.status(200).json({ data: data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const show = async (req, res) => {
    try {
        const name = req.params.name;
        const country = await Country.findByName(name);
        res.status(200).json(country);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const create = async (req, res) => {
    try {
        const data = req.body;
        const newCountry = await Country.create(data);
        res.status(201).json(newCountry);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const update = async (req, res) => {
    try {
        const countryToUpdate = await Country.findByName(req.params.name);
        const updatedCountry = await countryToUpdate.update(req.body);
        res.status(200).send({data: updatedCountry});
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const destroy = async (req, res) => {
    try {
        const countryToDestroy = await Country.findByName(req.params.name);
        const response = await countryToDestroy.destroy();
        res.status(200).end();
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports = { index, show, create, update, destroy };
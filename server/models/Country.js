const db = require('../db/connect.js');

class Country {
    constructor({country_id, name, capital, population, languages, fun_fact, map_image_url}) {
        this.country_id = country_id;
        this.name = name;
        this.capital = capital;
        this.population = population;
        this.languages = languages;
        this.fun_fact = fun_fact;
        this.map_image_url = map_image_url;
    };

    static async getAll() {
        const response = await db.query("SELECT name FROM country");
        if (response.rows.length === 0) {
            throw new Error("No countries available.");
        }
        return response.rows.map(c => new Country(c));
    };

    static async findById(name) {
        try {
            const response = await db.query("SELECT * FROM country WHERE name = $1", [name]);
            return new Country(response.rows[0]);
        } catch (err) {
            throw new Error('This country does not exist!');
        }
    };

    static async create(data) {
        if (!data.name) { throw new Error('Name is missing!'); };

        if (!data.capital) { throw new Error('Capital is missing!'); };

        if (!data.population) { throw new Error('Population is missing!'); };

        if (!data.languages || data.languages.length === 0) { throw new Error('Languages are missing!'); };

        if (!map_image_url) { throw new Error('Flag image is missing!'); };

        const response = await db.query('INSERT INTO country (name, capital, population, languages, fun_fact, map_image_url) VALUES ($1, $2, $3, $4, $5, $6)', [data.name, data.capital, data.population, data.languages, data.fun_fact, data.map_image_url]);
        return new Country(response.rows[0]);
    };

    async update(data) {};

    async destroy() {
        try {
            const response = await db.query("DELETE FROM country WHERE id = $1 RETURNING *", [this.id]);
            return new Country(response.rows[0]);
        } catch (err) {
            throw new Error("Cannot delete.");
        };
    };
}

module.exports = Country;
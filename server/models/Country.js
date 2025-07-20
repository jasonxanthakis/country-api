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

    static async findByName(name) {
        try {
            const response = await db.query("SELECT * FROM country WHERE LOWER(name) = LOWER($1)", [name]);
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

        if (!data.map_image_url) { throw new Error('Flag image is missing!'); };

        const existing = await db.query('SELECT name FROM country WHERE LOWER(name) = LOWER($1)', [data.name]);

        if (existing.rows.length === 0) {
            const response = await db.query('INSERT INTO country (name, capital, population, languages, fun_fact, map_image_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [data.name, data.capital, data.population, data.languages, data.fun_fact, data.map_image_url]);
            return new Country(response.rows[0]);
        } else {
            throw new Error('Country already exists!');
        }
    };

    static createQuery(id, data) {
        const keys = Object.keys(data);
        const values = keys.map(key => data[key].toString());

        const inject = keys.map((key, index) => `${key} = $${index + 1}`).join(', ');

        let sqlStatement = `UPDATE country SET ${inject} WHERE country_id = '${id}' RETURNING *;`;
        return { sql: sqlStatement, values };
    };

    async update(data) {
        const {sql, values} = Country.createQuery(this.country_id, data);

        try {
            const response = await db.query(sql, values);
            return new Country(response.rows[0]);
        } catch (err) {
            console.log(err);
            throw new Error("Cannot update.");
        }
    };

    async destroy() {
        try {
            const response = await db.query("DELETE FROM country WHERE country_id = $1 RETURNING *", [this.country_id]);
            return new Country(response.rows[0]);
        } catch (err) {
            console.error(err);
            throw new Error("Cannot delete.");
        };
    };
}

module.exports = Country;
//const db = require('../database/connect');
const axios = require('axios');

class Hero {
    constructor(id, name, powerstats, biography, appearance, work, connections, image) {
    this.id = id;
    this.name = name;
    this.powerstats = powerstats;
    this.biography = biography;
    this.appearance = appearance;
    this.work = work;
    this.connections = connections;
    this.image = image;
}

    static async getById(id) {
    try {
        const response = await axios.get(`${process.env.URL_DB}/${id}`);
        const heroData = response.data;

        const { id: heroId, name, powerstats, biography, appearance, work, connections, image } = heroData;
        const hero = new Hero(heroId, name, powerstats, biography, appearance, work, connections, image);

        return hero;
    } catch (error) {
        throw new Error(`Failed to fetch hero data: ${error.message}`);
    }
}

static async getAll() {
    try {
      const response = await axios.get(`${process.env.URL_DB}/`);
      const heroes = response.data.results;
      return heroes.map(hero => new Hero(hero.id, hero.name, hero.powerstats, hero.biography, hero.appearance, hero.work, hero.connections, hero.image));
    } catch (error) {
      throw new Error(`Failed to fetch heroes data: ${error.message}`);
    }
  }
}

module.exports = Hero;

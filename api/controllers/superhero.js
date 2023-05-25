const Hero = require("../models/superhero.js");

async function index(req, res) {
  try {
    const heroes = await Hero.getAll();
    res.status(200).json(heroes);
  } catch (err) {
    res.status(500).json({ "error": err.message });
  }
}

async function show(req, res) {
  try {
    const id = parseInt(req.params.id);
    const hero = await Hero.getById(id);
    res.status(200).json(hero);
  } catch (err) {
    res.status(404).json({ "error": err.message });
  }
}

module.exports = {
  index,
  show,
};

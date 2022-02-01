const db = require("../../data/dbConfig");

function getPlants() {
  return db("plants");
}

module.exports = {};

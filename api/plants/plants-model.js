const db = require("../../data/dbConfig");

function getPlants() {
  return db("plants");
}

async function getPlantById(plant_id) {
  const plantRows = await db("plants").select().where("id", plant_id);
}

module.exports = { getPlants, getPlantById };

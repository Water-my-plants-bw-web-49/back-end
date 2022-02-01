const res = require("express/lib/response");
const db = require("../../data/dbConfig");

function getPlants() {
  return db("plants");
}

async function getPlantById(plant_id) {
  const plantRows = await db("plants").select().where("id", plant_id);
  return plantRows;
}

module.exports = { getPlants, getPlantById };

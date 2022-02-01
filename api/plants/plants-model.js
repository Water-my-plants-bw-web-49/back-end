const res = require("express/lib/response");
const db = require("../../data/dbConfig");

function getPlants() {
  return db("plants");
}

async function getPlantById(plant_id) {
  const plantRows = await db("plants").select().where("id", plant_id);
  return plantRows;
}

async function deletePlants(plant_id) {
  return db("plants").where({ id }).del();
}

module.exports = { getPlants, getPlantById };

const req = require("express/lib/request");
const res = require("express/lib/response");
const db = require("../../data/dbConfig");

function getPlants() {
  return db("plants");
}

async function getPlantById(plant_id) {
  const plantRows = await db("plants").select().where("id", plant_id);
  return plantRows;
}

async function deletePlant(id) {
  return db("plants").where({ id }).del();
}

function updatePlant(id, changes) {
  return db("plants")
    .where("id", id)
    .update(changes)
    .then((count) => (count > 0 ? getPlantById(id) : null));
}

function findBy(filter) {
  //this is untested
  return db("plants").where(filter); // {username: "foo"}
}

module.exports = { getPlants, getPlantById, deletePlant, updatePlant, findBy };

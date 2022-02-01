const db = require("../../data/dbConfig");
const Plant = require("./plants-model");

// async function validatePlantId(plant_id) {
//   console.log("validating...");
//   //   console.log("plant_id:", plant_id);
//   console.log("req:", req);

//   const plantRows = await Plant.getPlantById(req.params.id);
//   console.log("plant rows:", plantRows);
//   if (!plantRows) {
//     res.status(404).json({ message: "That plant ID doesn't exist!" });
//   }
// }

const validatePlantId = async (req, res, next) => {
  console.log("req.params.id:", req.params.id);
  const plantRows = await Plant.getPlantById(req.params.id);
  console.log("plantRows:", plantRows);
  if (plantRows.length === 0) {
    console.log("failing");
    res.status(404).json({ message: "That plant ID doesn't exist!" });
  } else {
    console.log("success");
    next();
  }
};
module.exports = {
  validatePlantId,
};

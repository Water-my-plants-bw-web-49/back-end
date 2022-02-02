const db = require("../../data/dbConfig");
const Plant = require("./plants-model");

const validatePlantId = async (req, res, next) => {
  const plantRows = await Plant.getPlantById(req.params.id);
  if (plantRows.length === 0) {
    res.status(404).json({ message: "That plant ID doesn't exist!" });
  } else {
    next();
  }
};

function validateNewPlant(req, res, next) {
  const { plant, nickname, species, h2ofrequency } = req.body;
  console.log(plant, nickname, species, h2ofrequency);

  if (!plant || !nickname || !species || !h2ofrequency) {
    res.status(404).json({ message: "please fill out all required fields" });
  } else if (plant.length > 128 || nickname.length > 128) {
    res.status(404).json({
      message: "plant name and plant nickname must be less than 128 characters",
    });
  } else {
    next();
  }
}

function validatePlantPut(req, res, next) {
  const { plant, nickname, species, h2ofrequency } = req.body;

  !plant && !nickname && !species && !h2ofrequency
    ? res
        .status(404)
        .json({ message: "Please include at least one item to update" })
    : next();
}

module.exports = {
  validatePlantId,
  validateNewPlant,
  validatePlantPut,
};

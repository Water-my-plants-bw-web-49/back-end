const { emit } = require("nodemon");
const db = require("../../data/dbConfig");
const Plant = require("./plants-model");

//status code correct (delete this note later)
const validatePlantId = async (req, res, next) => {
  const plantRows = await Plant.getPlantById(req.params.id);
  if (plantRows.length === 0) {
    next({ status: 404, message: "That plant ID doesn't exist!" });
  } else {
    next();
  }
};

//status code correct (delete this note later)
async function validateNewPlant(req, res, next) {
  //validates that the request has the four necessary fields, that name and nickname are less than 128 characters, and that name and nickname are unique.

  const { plant, nickname, species, h2ofrequency } = req.body;

  const isPlant = await Plant.findBy({ plant: plant });
  const isNickname = await Plant.findBy({ nickname: nickname });

  if (!plant || !nickname || !species || !h2ofrequency) {
    res.status(404).json({ message: "please fill out all required fields" });
  } else if (plant.length > 128 || nickname.length > 128) {
    next({
      status: 400,
      message: "plant name and plant nickname must be less than 128 characters",
    });
  } else if (isPlant.length > 0 || isNickname.length > 0) {
    next({ status: 400, message: "must pick unique plant name and nickname" });
  } else {
    next();
  }
}

//status code correct (delete this note later)
function validatePlantPut(req, res, next) {
  const { plant, nickname, species, h2ofrequency } = req.body;

  !plant && !nickname && !species && !h2ofrequency
    ? next({
        status: 400,
        message: "Please include at least one item to update",
      })
    : next();
}

module.exports = {
  validatePlantId,
  validateNewPlant,
  validatePlantPut,
};

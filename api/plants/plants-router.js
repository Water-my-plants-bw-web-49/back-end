const router = require("express").Router();
const Plant = require("./plants-model");
const {
  validatePlantId,
  validatePlantPut,
  validateNewPlant,
} = require("./plants-middleware");

router.post("/", validateNewPlant, async (req, res, next) => {
  //   res.status(200).json({ message: "posting..." });
  // Authenticated user can Create, a plant
  //this needs restricted middleware

  await Plant.insert(req.body)
    .then((plant) => {
      res.status(201).json(plant);
    })
    .catch((err) => {
      next(err);
    });
});

router.put(
  "/:id",
  validatePlantId,
  validatePlantPut,
  async (req, res, next) => {
    // Authenticated user can update a plant
    //this needs restricted middleware

    await Plant.updatePlant(req.params.id, req.body)
      .then((updatedPlant) => {
        res.status(200).json(updatedPlant);
      })
      .catch((err) => {
        next(err);
      });
  }
);

router.delete("/:id", validatePlantId, async (req, res, next) => {
  // Authenticated user can delete a plant
  //needs restricted middleware
  const { id } = req.params;
  await Plant.deletePlant(id)
    .then(() => {
      res.status(200).json({ message: "plant deleted" });

    })
    .catch((err) => {
      next(err);
    });
});

router.get("/", (req, res, next) => {
  // Authenticated user can view a list of created plants.
  //this needs restricted middleware at least, not sure if it needs anything else. -AH
  Plant.getPlants()
    .then((plants) => {

      res.status(200).json(plants);
    })
    .catch((err) => {
      next(err);
    });
});
//status code correct (delete this note later)

router.get("/:id", validatePlantId, (req, res, next) => {
  // A plant can be selected to present user
  //this needs restricted middleware
  const { id } = req.params;

  Plant.getPlantById(id)
    .then((plant) => {
      res.status(200).json(plant);
    })
    .catch((err) => {
      next(err);
    });
});
module.exports = router;


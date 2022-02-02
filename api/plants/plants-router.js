const router = require("express").Router();
const Plant = require("./plants-model");
const { validatePlantId } = require("./plants-middleware");

router.post("/", (req, res, next) => {
  // Authenticated user can Create, a plant
});

router.put("/:id", validatePlantId, (req, res, next) => {
  // Authenticated user can update a plant
  res.status(200).json({ message: "putting..." });
});

router.delete("/:id", validatePlantId, async (req, res, next) => {
  // Authenticated user can delete a plant
  //needs restricted middleware
  const { id } = req.params;

  await Plant.deletePlant(id)
    .then(() => {
      res.status(201).json({ message: "plant deleted" });
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/", (req, res, next) => {
  //This is up and running now, returns the list of plants.
  // Authenticated user can view a list of created plants.
  //this needs restricted middleware at least, not sure if it needs anything else. -AH
  Plant.getPlants()
    .then((plants) => {
      res.status(201).json(plants);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.get("/:id", validatePlantId, (req, res, next) => {
  // A plant can be selected to present user
  const { id } = req.params;

  Plant.getPlantById(id)
    .then((plant) => {
      res.status(201).json(plant);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

// router.verb('/', (req, res, next) => {

// })

module.exports = router;

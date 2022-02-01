const router = require("express").Router();
const Plant = require("./plants-model");

router.post("/", (req, res, next) => {
  // Authenticated user can Create, a plant
});
router.put("/:id", (req, res, next) => {
  // Authenticated user can update a plant
});
router.delete("/:id", (req, res, next) => {
  // Authenticated user can delete a plant
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

router.get("/:id", (req, res, next) => {
  // A plant can be selected to present user
  //needs id validation
  //   console.log("req.params.id:", req.params.id);
  const { id } = req.params;

  Plant.getPlantById(id)
    .then((plant) => {
      res.status(201).json(plant);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });

  //   res.json({ message: "plants id get endpoint successful call" });
});
// router.verb('/', (req, res, next) => {

// })

module.exports = router;

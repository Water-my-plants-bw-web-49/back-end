const router = require('express').Router()


router.post('/plants', (req, res, next) => {
    // Authenticated user can Create, a plant
})
router.put('/plants/:id', (req, res, next) => {
    // Authenticated user can update a plant
})
router.delete('/plants/:id', (req, res, next) => {
    // Authenticated user can delete a plant
})
router.get('/plants', (req, res, next) => {
    // Authenticated user can view a list of created plants.
})
router.get('/plants/:id', (req, res, next) => {
    // A plant can be selected to present user 
})
// router.verb('/', (req, res, next) => {

// })

module.exports = router;

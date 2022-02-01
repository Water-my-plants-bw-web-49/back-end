const router = require('express').Router()


router.post('/', (req, res, next) => {
    // Authenticated user can Create, a plant
    
})
router.put('/:id', (req, res, next) => {
    // Authenticated user can update a plant
    
})
router.delete('/:id', (req, res, next) => {
    // Authenticated user can delete a plant
    
})
router.get('/', (req, res, next) => {
    // Authenticated user can view a list of created plants.
    res.json({message: 'plants get endpoint successful call'})
})
router.get('/:id', (req, res, next) => {
    // A plant can be selected to present user 
    res.json({message: 'plants id get endpoint successful call'})
})
// router.verb('/', (req, res, next) => {

// })

module.exports = router;

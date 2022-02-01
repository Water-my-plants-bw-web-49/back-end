const router = require('express').Router()


router.post('/plants', (req, res, next) => {
    // Authenticated user can Create, a plant
    res.json({message: 'plants post endpoint successful call'})
})
router.put('/plants/:id', (req, res, next) => {
    // Authenticated user can update a plant
    res.json({message: 'plants id put endpoint successful call'})
})
router.delete('/plants/:id', (req, res, next) => {
    // Authenticated user can delete a plant
    res.json({message: 'plants delete endpoint successful call'})
})
router.get('/plants', (req, res, next) => {
    // Authenticated user can view a list of created plants.
    res.json({message: 'plants get endpoint successful call'})
})
router.get('/plants/:id', (req, res, next) => {
    // A plant can be selected to present user 
    res.json({message: 'plants id get endpoint successful call'})
})
// router.verb('/', (req, res, next) => {

// })

module.exports = router;

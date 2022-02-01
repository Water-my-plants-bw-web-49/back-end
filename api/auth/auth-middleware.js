const { findBy } = require('../users/users-model')

const checkUsernameExists = async (req, res, next) => {
    try {
        const [ user ] = await findBy({username: req.body.username})
        if(user){
            next({
                status: 401, 
                message: 'Oops username taken! Please choose another.'})
        } else {
            next()
        }
    } catch(err) {
        next(err)
    }
}

// const registrationRequired = (res, req, next) => {
//     const { pnumber } = req.body
//     if(!pnumber){
//         next({
//             status: 401,
//             message: 'Uh Oh! Phone number is required.'
//         })
//     } else {
//         next()
//     }
// }

module.exports = {
    checkUsernameExists,
    // registrationRequired,
}
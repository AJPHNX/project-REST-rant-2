const router = require('express').Router()

router.get('/',(req,rfes) =>{
    res.send('GET /places')
})
module.exports = router
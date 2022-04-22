const router = require('express').Router()
const User = require('../model/userSchema')
router.get('/user', async (req, res) => {
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

module.exports = router

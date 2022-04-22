const express = require('express')
const User = require('../model/userSchema')
const router = express.Router()
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')
router.get('/', (req, res) => {
    res.json('hello')
})
router.post('/', async (req, res) => {
    const newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.CRYPTO_SEC
        ).toString(),
    })
    try {
        const savedUser = await newUser.save()
        res.json(savedUser)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ userName: req.body.userName })
        !user && res.status(401).json('no such user')
        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.CRYPTO_SEC
        )
        const userPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
        userPassword !== req.body.password &&
            res.status(401).json('password in correct')
        const { password, ...other } = user._doc
        const accesToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
            { expiresIn: '3d' }
        )
        res.status(200).json({ ...other, accesToken })
    } catch (error) {
        res.status(400).json(error.message)
    }
})
// router.put("/", (req, res) => {});
// router.delete("/", (req, res) => {});

module.exports = router

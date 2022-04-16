const router = require('express').Router()
const User = require('../models/User')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')
router.get('/route', (req, res) => {
    res.send(savedUser)
})
router.post('/register', async (req, res) => {
    const newUser = new User({
        userName: req.body.userName,
        password: CryptoJS.AES.encrypt(req.body.password, '1233').toString(),
        email: req.body.email,
    })
    const savedUser = await newUser.save()
    if (savedUser) {
        res.json('welcome ')
    } else {
        res.json(err, 'eror')
    }
})
router.post('/login', async (req, res) => {
    const user = await User.findOne({ userName: req.body.userName })
    !user && res.json('no such user')
    const hashedPassword = CryptoJS.AES.decrypt(user.password, '1233')
    const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8)
    Originalpassword !== req.body.password && res.json('wrong password')
    const accesToken = jwt.sign(
        {
            id: user._id,
            isAdmin: user.isAdmin,
        },
        'seckey',
        { expiresIn: '3d' }
    )

    const { password, ...others } = user._doc
    res.json({ ...others, accesToken })
})
router.get('/user', async (req, res) => {
    const users = await User.find()
    res.json(users)
})

module.exports = router

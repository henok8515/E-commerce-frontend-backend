const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const userSchema = new mongoose.Schema(
    {
        nameName: { type: String, unique: true, required: true },
        password: { type: String, unique: true, required: true },
        email: { type: String, unique: true, required: true },
        isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true }
)

const NewUser = mongoose.model('User', userSchema)
async function newUser() {
    const user = new NewUser({
        nameName: '',
        password: '',
        email: '',
        isAdmi: true,
    })
    const savedUser = await user.save()
    console.log(savedUser)
}
newUser()
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('db connected')
    })
    .catch((err) => {
        console.log(err, 'db connection error')
    })

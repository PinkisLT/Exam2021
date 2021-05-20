const userDb = require('../schemas/userSchema')

module.exports = {
    addUser: (req, res) => {
        const {
            name,
            age,
            email,
            password
        } = req.body

        const user = new userDb()
        user.name = name
        user.age = age
        user.email = email
        user.password = password


        user.save().then(data => {
            res.send({success: true})
        })
    },
    getUsers: async (req, res) => {
        const users = await userDb.find()
        res.send({success: true, users})
    },
    getSingleUser: async (req, res) => {

        const user = await userDb.findOne({_id: req.params.id })
        res.send({success: true, user})
    },
    deleteUser: async (req, res) => {
        const { id } = req.params
        await userDb.findOneAndDelete({_id: id})
        const users = await userDb.find()
        res.send({success: true, users})
    },
    updateUser: async (req, res) => {
        let { id } = req.params
        await userDb.findOneAndUpdate({_id: id},  { name: req.body.name, age: req.body.age, email: req.body.email, password: req.body.password })

        const users = await userDb.find()
        res.send({success: true, users})
    }
}
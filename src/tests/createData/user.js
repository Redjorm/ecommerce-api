const User = require("../../models/User")

const user = async()=>{

    const userCreate = {
        firstName: "Jesus",
        lastName: "Camacho",
        email: "jesusC@gmail.com",
        password: "jesus123",
        phone: "+12345"
    }

    await User.create(userCreate)

}
module.exports = user
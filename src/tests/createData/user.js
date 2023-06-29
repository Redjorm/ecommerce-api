const User = require("../../models/User")

const user = async()=>{

    const userCreate = {
        firstName: "jesus",
        lastName: "camacho",
        email: "jesus@gmail.com",
        password: "jesus1234",
        phone: "+544123031413"
    }

    await User.create(userCreate)

}
module.exports = user
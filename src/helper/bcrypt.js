const bcrypt = require('bcryptjs')

const encrypt = async(textPlane) => {
    const hash = await bcrypt.hash(textPlane, 10)
    return hash
}

const compare = async(passwordPlain, hashPassword)=>{
    return await bcrypt.compare(passwordPlain, hashPassword)
}

module.exports = {
    encrypt,
    compare
}
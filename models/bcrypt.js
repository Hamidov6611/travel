const bcrypt = require('bcrypt')

module.exports = {
    createBcrypt: async (password) => {
        return await bcrypt.hashSync(password, 10)
    },
    compareBcrypt: async (password, buffer) => {
        return await bcrypt.compare(password, buffer)
    },
}
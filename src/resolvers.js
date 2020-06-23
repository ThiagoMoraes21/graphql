const Users = require('./models/users');

module.exports = {
    Query: {
        users:  () =>  Users.find(),
        user: (proxy, {id}) => Users.findById(id)
    },

    Mutation: {
        createUser: (proxy, { name, email }) => Users.create({ name, email })
    }
}
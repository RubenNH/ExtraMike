const { personalRouter } = require('./personal/personal.controller');
const { userRoute } = require('./users/users.controller');
const { cteRoute } = require('./cliente/cliente.controller')
const { epdRoute } = require('./empleado/empleado.controller')

module.exports = {
    personalRouter,
    userRoute,
    cteRoute,
    epdRoute
}
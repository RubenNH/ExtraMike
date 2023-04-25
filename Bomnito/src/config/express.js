const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { personalRouter, userRoute, cteRoute, epdRoute } = require('../modules/controller/routes');

const app = express();

app.set("port",process.env.PORT || 3000);

app.use(cors({origins:"*"}));
app.use(express.json({limit:'50mb'}));

app.get('/', (req,res)=>{
    res.send("otra casa");
});
app.use('/api/personal', personalRouter);

app.use('/api/user', userRoute)

app.use('/api/cliente', cteRoute);

app.use('/api/empleado', epdRoute);


module.exports = {app};
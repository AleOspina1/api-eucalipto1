const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const BodyParser = require('body-parser')
const mongoose = require('./Db')
const jwtCheck = require('./middleware/jwt.Middleware')
const dotenv = require('dotenv')
const productRoute = require('./Routes/Products/productsRoutes')
const ventaRoute = require('./Routes/Venta/ventaRoutes')
const userRoute = require('./Routes/User/userRoutes')

dotenv.config({path: './.env'})
const port = process.env.PORT || 5000;

const app = express();

app.set('port', process.env.PORT || process.env.PORT )

//Middleware

app.use(morgan('dev'));
app.use(BodyParser.urlencoded({extended: false}));
app.use(BodyParser.json());
app.use(cors());
// app.use(jwtCheck)







//app.use('direccion', require('routa'))

app.use('/products', productRoute)
app.use('/venta', ventaRoute)
app.use('/user', userRoute)



















app.listen(port, () => {
    console.log(`Starting in Port ${process.env.PORT}`);
});
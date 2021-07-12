const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const db = require('./Database/db');
const user_route = require('./Routes/User_route')
const company_route = require('./Routes/Company_route')
const reseller_route = require('./Routes/Reseller_route')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(user_route);
app.use(reseller_route);

app.listen(90);

//Cylinder2.0
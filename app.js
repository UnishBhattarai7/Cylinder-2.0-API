const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const db = require('./Database/db');
const user_route = require('./Routes/User_route')
const addmember_route = require('./Routes/AddMember_route')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(user_route);
app.use(addmember_route);

app.listen(90);

//Cylinder2.0
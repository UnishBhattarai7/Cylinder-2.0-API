const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(100);

//Cylinder2.0
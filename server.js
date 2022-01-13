const express = require('express');
const api = require('./routes/notes.js');
const app = express();

//Set port
const PORT = process.env.PORT || 3001;
//Setting what to utilize
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



app.use('/', api); 

app.listen(PORT, () =>
    console.log(`Listening on ${PORT}1`))


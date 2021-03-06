const express = require('express');
const api = require('./routes/notes.js');
const app = express();
const path = require('path')
//Set port
const PORT = process.env.PORT || 3001;
//Setting what to utilize
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



app.use('/api', api); 

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);


app.listen(PORT, () =>
    console.log(`Listening on ${PORT}`))


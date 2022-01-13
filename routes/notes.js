const { randomUUID } = require('crypto');
const express = require('express');
const fs = require('fs');

const router = express.Router();
function readNotes() { 
  return JSON.parse(fs.readFileSync('db/db.json'))
}

router.post('/notes', (req, res) => {
    const notes = readNotes()
    const {title, text} = req.body;
    if (req.body) {
        const newNote = {
            title: title,
            text: text,
            id: randomUUID(),
        }
        notes.push(newNote);
        fs.writeFileSync('db/db.json', JSON.stringify(notes));
    res.json(newNote)
    }else {
        res.error('Did not add Note')
    }
    
})
router.get('/notes', (req, res) => {
    const notes = readNotes()
    res.json(notes);
})

router.delete('/notes/:id', (req, res) =>{
    const notes = readNotes();
    const updatedNotes = notes.filter(note => note.id !== req.params.id);
    fs.writeFileSync('db/db.json', JSON.stringify(updatedNotes));
    res.json({ok: true})
})



module.exports = router;



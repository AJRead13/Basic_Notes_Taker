const { randomUUID } = require('crypto');
const express = require('express');
const fs = require('fs');
const router = express.Router();
function readNotes() { 
  return JSON.parse(fs.readFileSync('/db/db.json'))
}

router.post('/api/notes', (req, res) => {
    const notes = readNotes()
    const {title, text} = req.body;
    if (req.body) {
        const newNote = {
            title: title,
            text: text,
            id: randomUUID(),
        }
        notes.push(newNote);
        fs.writeFileSync(notes, '/db/db.json');
    res.json(newNote)
    }else {
        res.error('Did not add Note')
    }
    
})
router.get('/api/notes', (req, res) => {
    const notes = readNotes()
    res.json(notes);
})

router.delete('/api/notes/:id', (req, res) =>{
    const notes = readNotes();
    const updatedNotes = notes.filter(note => note.id !== req.params.id);
    fs.writeFileSync(updatedNotes, '/db/db.json');
    res.json({ok: true})
})



module.exports = router;



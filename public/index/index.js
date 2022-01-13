const saveBtn = document.getElementById('save-btn');
const addBtn = document.getElementById('add-btn');


const createCard = (note) => {
    const cardEl = document.createElement('div');
    cardEl.classList.add('card', 'mb-6');
    cardEl.setAttribute('key', note.note_id);
}

const cardHeaderEl = document.createElement('h4');
cardHeaderEl.classList.add(
    'card-header',
    'bg-primary',
    'text-light',
    'p-2',
    'm-0'
);
cardHeaderEl.innerHTML = `${note.name} </br>`;

cardEl.appendChild(cardHeaderEl);
cardEl.appendChild(cardBodyEl);

const getNotes = () =>
    fetch('api/notes', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json0',
        },
        body: JSON.stringify(note),
    })




//eventually will render saves notes on load
getNotes().then((data) => data.forEach((note) => createCard(note)));

//getting note info
const noteContent = document.getElementById('noteArea').value;

//getting note title
const noteTitle = document.getElementById('noteTitle').value.trim();

//creating new note
const newNote = {
    title: noteTitle,
    note: noteContent,
}

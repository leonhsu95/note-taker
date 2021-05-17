// DEPENDENCIES
const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// SETS UP EXPRESS TO HANDLE DIRECTORY PARSING
app.use(express.static("public"));

// LISTENERS
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));


// API GET REQUEST TO RETRIEVE DATA SAVED from ./db/db.json
app.get("/api/notes", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(data);
});

// API POST USER SAVED NOTES to ./db/db.json
app.post("/api/notes", (req, res) => {

    // EXTRACT USER NOTE FROM BODY.  
    const newNote = req.body;
    newNote.id = uuidv4(); // GENERATE UNIQUE ID npm package
    
    // RETRIEVE db.json ARRAY FIRST
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    // THEN PUSH NEW NOTE TO db.json ARRAY
    data.push(newNote);

    console.log(`Note with ID: ${newNote.id} saved.`)

    // THEN WRITE SAVE to the ./db/db.json FILE
    fs.writeFileSync('./db/db.json', JSON.stringify(data));

    res.json(data);
});

// API DELETE request
app.delete("/api/notes/:id", (req, res) => {

    // CAPTURED VALUES POPULATED IN req.params. RETRIEVE ID VALUE
    let noteId = req.params.id.toString();
    
    // RETRIEVE db.json ARRAY FIRST
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    // FILTER EXISTING JSON PARSED ARRAY SO THAT THE NOTE WITH ID THAT'S BEING DELETED DOES NOT SHOW AGAIN
    const updateData = data.filter( note => note.id.toString() !== noteId );

    console.log(`Note with ID: ${noteId} deleted.`)

    // THEN WRITE SAVE to the ./db/db.json FILE WITH THE FILTERED ARRAY
    fs.writeFileSync('./db/db.json', JSON.stringify(updateData));

    res.json(updateData);
});

app.listen(PORT, () => {console.log(`App listening on http://localhost:${PORT}`);});


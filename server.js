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

app.listen(PORT, () => {console.log(`App listening on http://localhost:${PORT}`);});


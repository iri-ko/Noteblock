let notesTitle = ["Banane", "Aufgabe"];
let notes = ["banana", "rasenmähen"];

let trashNotes = [];


function init(){
    JSON.stringify(notesTitle);
    JSON.stringify(notes);
    JSON.stringify(trashNotes);

    getFromLocalStorage();

    renderNotes()
    renderTrashNotes()
}

function getFromLocalStorage(){
    let myArr = JSON.parse(localStorage.getItem("notes"));
    let myArr2 = JSON.parse(localStorage.getItem("trashNotes"))

    if (myArr === null){
        return
    }

    notes = myArr;
    

    if (myArr2 === null){
        return
    }
    
    trashNotes = myArr2;
}

function renderNotes() {
    let contentRef = document.getElementById("content");

    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplates(indexNote);
    }
}

function getNoteTemplates(indexNote) {
    return `<p class="note">+ Titel: ${notesTitle[indexNote]} -> ${notes[indexNote]} <button onclick="moveToTrash(${indexNote})">x</button></p>`;
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById("trashContent");
    trashContentRef.innerHTML = "";

    for (
        let indexTrashNote = 0;
        indexTrashNote < trashNotes.length;
        indexTrashNote++
    ) {
        trashContentRef.innerHTML += getTrashNoteTemplates(indexTrashNote);
    }
}

function getTrashNoteTemplates(indexNote) {
    return `<p class="note">+ Titel: ${trashNotes[indexNote].title} -> ${trashNotes[indexNote].content} <button onclick="deleteNote(${indexNote})">x</button></p>`;
}

function addNote() {
    let noteInputRef = document.getElementById("note_input");
    let noteInput = noteInputRef.value;

    notes.push(noteInput);

    renderNotes();

    noteInputRef = "";

    //hier auch Daten abspeichern? Weil hinzufügen -> gleich speichern Sinn machen würde

    localStorage.setItem("notes", JSON.stringify(notes))
}


function moveToTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1)[0];
    let trashTitle = notesTitle.splice(indexNote, 1)[0];

    trashNotes.push({ title: trashTitle, content: trashNote });

    renderNotes();
    renderTrashNotes();

    localStorage.setItem("notes", JSON.stringify(notes))
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes))
}

function deleteNote(indexNote) {
    trashNotes.splice(indexNote, 1);

    

    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
    
    renderTrashNotes();
}

// archive notes

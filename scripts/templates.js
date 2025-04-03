function getTrashNoteTemplates(indexNote) {
    return `<p class="note">+ Titel: ${trashNotes[indexNote].title} -> ${trashNotes[indexNote].content} <button onclick="deleteNote(${indexNote})">x</button></p>`;
}

function getMenuTemplates(indexMenu){
    return `<p class="menuList" id = "m-${indexMenu}">${notesTitle[indexMenu]}</p> `;
 }
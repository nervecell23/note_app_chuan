(function(exports){

  function NoteList(){
    this.noteList = [];

  }

  NoteList.prototype.returnNotes = function(){
    return this.noteList;
  }

  NoteList.prototype.createNote = function(string){
    newNote = new Note(string);
    this.noteList.push(newNote);
  }

  exports.NoteList = NoteList;

})(this)

(function(exports){

  function NoteList(){
    this.noteList = [];

  }

  NoteList.prototype.returnNotes = function(){
    return this.noteList;
  }

  NoteList.prototype.createNote = function(string){
    this.noteList.push(new Note(string));
  }

  exports.NoteList = NoteList;

})(this)

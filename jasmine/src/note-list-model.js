(function(exports){

  function NoteList(){
    this.noteList = [];
    this.nextId = 0;
  }

  NoteList.prototype.returnNotes = function(){
    return this.noteList;
  }

  NoteList.prototype.createNote = function(string){
    this.noteList.push(new Note(this.nextId, string));
    this.incrementId();
  }

  NoteList.prototype.incrementId = function(){
    this.nextId++;
  }

  exports.NoteList = NoteList;

})(this)

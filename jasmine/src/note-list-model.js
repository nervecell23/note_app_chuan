(function(exports){

  function NoteList(){
    this.noteList = [];

  }

  NoteList.prototype.returnNotes = function(){
    return this.noteList;
  }

  exports.NoteList = NoteList;

})(this)

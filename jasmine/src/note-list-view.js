(function(exports){

  function NoteListView(noteList){
    this.noteList = noteList;
  }

  NoteListView.prototype.render = function(){

    var stringSum;

    function process(element){
      return "<li><div>" + element.getText() + "</div></li>";
    }

    var notesArray = this.noteList.returnNotes();
    stringSum = notesArray.map(process);
    stringSum = stringSum.reduce((a, b)=>{return a + b;});

    return "<ul>" + stringSum + "</ul>";
  }

  exports.NoteListView = NoteListView;
})(this)

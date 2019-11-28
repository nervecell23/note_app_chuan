(function(exports){

  function NoteListView(noteList){
    this.noteList = noteList;
  }

  NoteListView.prototype.render = function(){
    var notesArray = this.noteList.returnNotes();
    var stringSum = notesArray.map(process).reduce((a, b)=>{return a + b;});
    
    function process(element){
      return "<li><div>" + element.getText() + "</div></li>";
    }

    return "<ul>" + stringSum + "</ul>";
  }

  exports.NoteListView = NoteListView;
})(this)

(function(exports){

  function Controller(noteList){
    this.noteList = noteList;
    this.noteList.createNote("Favourite drink: seltzer");
    window.addEventListener("hashchange", ()=>this.displaySingleNote());
  }

  Controller.prototype.render = function(){
      var noteListView = new NoteListView(this.noteList);
      document.getElementById("app").innerHTML = noteListView.render();
  }

  Controller.prototype.findNoteId = function(){
    console.log("abcde");
    return Number(window.location.hash.split("#notes/")[1]);
  }

  Controller.prototype.displaySingleNote = function(){
    var id = this.findNoteId();
    var singleNote = this.noteList.returnNotes()[id];
    var singleNoteView = new SingleNoteView(singleNote);
    document.getElementById("app").innerHTML = singleNoteView.render();
  }

  exports.Controller = Controller;

})(this)

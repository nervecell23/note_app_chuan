(function(exports){

  function Controller(noteList){
    var noteList = noteList;
    noteList.createNote("Favourite drink: seltzer");
    this.noteListView = new NoteListView(noteList);
  }

  Controller.prototype.render = function(){
      document.getElementById("app").innerHTML = this.noteListView.render();
  }

  exports.Controller = Controller;

})(this)

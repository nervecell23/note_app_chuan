(function(exports){

  function SingleNoteView(noteModel){
    this.noteModel = noteModel;
  }

  SingleNoteView.prototype.render = function(){
    var text = this.noteModel.getText();
    return '<div>' + text + '</div>';
  }

  exports.SingleNoteView = SingleNoteView;
})(this)

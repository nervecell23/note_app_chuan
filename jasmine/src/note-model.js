(function(exports){

  function Note(id, message){
    this.id = id;
    this.text = message;

  }

  Note.prototype.getText = function(){
    return this.text;
  }

  exports.Note = Note;

})(this);

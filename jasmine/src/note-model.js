(function(exports){

  function Note(id, message){
    this.id = id;
    this.text = message;

  }

  Note.prototype.getText = function(){
    return this.text;
  }

  Note.prototype.getId = function(){
    return this.id;
  }

  exports.Note = Note;

})(this);

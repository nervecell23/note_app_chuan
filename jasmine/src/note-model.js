function Note(message){

  this.text = message;

}

Note.prototype.getText = function(){
  return this.text;
}

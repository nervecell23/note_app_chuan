describe("NoteList", ()=>{
  var subject;
  var result;

  it("contains an array of 'Note' objects", ()=>{
    subject = new NoteList();
    result = subject.noteList;
    expect(result).toEqual([]);
  })

  describe("#returnNotes", ()=>{

    it("returns all the notes stored in the array", ()=>{
      subject = new NoteList();
      result = subject.returnNotes();
      expect(result).toEqual([]);
    })
  })



})

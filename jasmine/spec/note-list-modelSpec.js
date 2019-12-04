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

  describe("#createNote", ()=>{
    it("creates and stores a note object in the array", ()=>{
      subject = new NoteList();
      subject.createNote("new message");
      result = subject.returnNotes()[0].getText();
      expect(result).toBe("new message");
    })

    it("adds an id to each note", ()=>{
      subject = new NoteList();
      subject.createNote("message 1");
      subject.createNote("message 2");
      result = subject.returnNotes();
      expect(result[0].id).toEqual(0);
      expect(result[1].id).toEqual(1);
    })
  })



})

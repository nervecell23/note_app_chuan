describe("NoteListView", ()=>{

  it("contains a 'NoteList' object", ()=>{
    newNoteList = new NoteList();
    subject = new NoteListView(newNoteList);
    result = subject.noteList;
    expect(result).toEqual(newNoteList);
  })

  describe("#render", ()=>{
    it("creates HTML codes", ()=>{
      newNoteList = new NoteList();
      newNoteList.createNote("test message 1");
      newNoteList.createNote("test message 2");
      subject = new NoteListView(newNoteList);
      result = subject.render();
      expected = "<ul><li><div>test message 1</div></li><li><div>test message 2</div></li></ul>";
      expect(result).toEqual(expected);
    })
  })
})

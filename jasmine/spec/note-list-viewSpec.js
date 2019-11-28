describe("NoteListView", ()=>{

  it("contains a 'NoteList' object", ()=>{
    newNoteList = new NoteList();
    subject = new NoteListView(newNoteList);
    result = subject.noteList;
    expect(result).toEqual(newNoteList);
  })
})

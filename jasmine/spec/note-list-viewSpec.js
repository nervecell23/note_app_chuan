describe("NoteListView", ()=>{

  it("contains a 'NoteList' object", ()=>{
    var newNoteList = new NoteList();
    var subject = new NoteListView(newNoteList);
    var result = subject.noteList;
    expect(result).toEqual(newNoteList);
  })

  describe("#render", ()=>{
    it("creates HTML codes", ()=>{
      var newNoteList = new NoteList();
      newNoteList.createNote("test message 1");
      newNoteList.createNote("test message 2");
      var subject = new NoteListView(newNoteList);
      var result = subject.render();
      var expected = "<ul><li><div>test message 1</div></li><li><div>test message 2</div></li></ul>";
      expect(result).toEqual(expected);
    })

    it("handles empty note list", ()=>{
      var newNoteList = new NoteList();
      var subject = new NoteListView(newNoteList);
      var result = subject.render();
      var expected = "<ul></ul>";
      expect(result).toEqual(expected);
    })

    it("limits length of message to be no longer than 20", ()=>{
      var doubleNoteList = {
        returnNotes: ()=>{
          return [
            {getText: ()=>{
              return 'long message length is longer than 20 characters';}
            },
            {getText: ()=>{
              return 'short message';}
            }];
        }
      };

      var subject = new NoteListView(doubleNoteList);
      var result = subject.render();
      var expected = "<ul><li><div>long message length </div></li><li><div>short message</div></li></ul>";
      expect(result).toEqual(expected);
    })
  })
})

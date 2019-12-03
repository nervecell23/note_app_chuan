describe("SingleNoteView", ()=>{

  describe("#render", ()=>{

    it("generates HTML string that represents the note model", ()=>{
      var doubleNoteModel = {
        getText: ()=>{ return 'test message'}
      };

      var subject = new SingleNoteView(doubleNoteModel);
      var expected = '<div>test message</div>';
      var result = subject.render();
      expect(result).toEqual(expected);
    })
  })
})

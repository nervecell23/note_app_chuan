describe("Note", ()=>{

  it("contains property 'text' set by constructor", ()=>{
    var subject = new Note("test message");
    expect(subject.text).toBe("test message");
  });

  describe('#getText', ()=>{
    it("it returns the value of 'text' attribute", ()=>{
      var subject = new Note("test message");
      expect(subject.getText()).toBe("test message");
    })
  })
});

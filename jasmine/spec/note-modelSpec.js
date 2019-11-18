describe("Note", ()=>{

  it("contains property 'text' set by constructor", ()=>{
    var subject = new Note("test message");
    expect(subject.text).toBe("test message");
  });
});

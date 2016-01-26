
// Example Spec below:

// describe('functionname', function(){
//   it('first spec here...', function(){
//     expect(functionname(parameter)).to.equal('placeholder');
//   });
// });


describe("MovieTicket", function(){
  it('will pass true if newObject if all parameters are met', function(){
    var newMovieTicket = new MovieTicket("Batman", '12:30', 16, 12.50);
    expect(newMovieTicket.name).to.equal("Batman");
    expect(newMovieTicket.time).to.equal("12:30");
    expect(newMovieTicket.age).to.equal(16);
    expect(newMovieTicket.cost).to.equal(12.50);
  });
});


describe("MovieTicket", function(){
  it('will pass true if newObject if all parameters are met', function(){
    var newMovieTicket = new MovieTicket("Batman","Sept 12th", '12:30', 16);
    expect(newMovieTicket.name).to.equal("Batman");
    expect(newMovieTicket.time).to.equal("12:30");
    expect(newMovieTicket.age).to.equal(16);
  });
});

describe("Ticket", function() {
  it('will return a movie ticket cost of $7 for customers age 55 or older', function() {
    var newMovieTicket = new MovieTicket("Batman", "Sept 12", '12:30', 60);
    expect(newMovieTicket.ticket()).to.equal("$7");
  });
});

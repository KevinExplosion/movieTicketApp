//Business Logic; BDD

function MovieTicket(name, date, time, age){
  this.name = name;
  this.date = date;
  this.time = time;
  this.age = age;
};

MovieTicket.prototype.ticket = function(){
  if (this.age >= 55){
    return "$7";
  } else {
    return "$10";
  }
};

//User input Logic

$(document).ready(function(){
  $("#buttonSubmit").click(function(event){
      event.preventDefault();

      //Global Vars;
      var movie_name = $("#movieName").val();
      var movie_date = $("#movieDate").val();
      var movie_time = $("#movieTime").val();
      var movie_age = parseInt($("#movieAge").val());

      var movie_ticket = new MovieTicket(movie_name, movie_date, movie_time, movie_age);

      $("#movieTickets").append("<p>You are going to see '" + movie_ticket.name + "' on " + movie_ticket.date
      + " at " + movie_ticket.time + " o'clock. Your ticket holder's age is " + movie_ticket.age + " years old.</p>");

  });
});

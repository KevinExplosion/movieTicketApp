//Business Logic; BDD

function MovieTicket(name, date, time, age){
  this.name = name;
  this.date = date;
  this.time = time;
  this.age = age;
};

MovieTicket.prototype.ticket = function(){
  if ((this.age >= 55) && (this.time <= 15)){
    return "$5";
  } else if ((this.age >= 55) && (this.time >= 15)){
    return "$10";
  } else if ((this.age <= 55) && (this.time <= 15)){
    return "$7";
  } else {
    return "$13";
  }
};

// var slider = new Slider('#ex2', {});

//User input Logic

$(document).ready(function(){
  $("#buttonSubmit").click(function(event){
      event.preventDefault();

      //Global Vars;
      var movie_name = $("#movieName").val();
      var movie_date = $("#movieDate").val();
      var movie_time = parseInt($("#movieTime").val());
      var movie_age = parseInt($("#movieAge").val());



      var movie_ticket = new MovieTicket(movie_name, movie_date, movie_time, movie_age);

      if(movie_date === "" || isNaN(movie_time) || isNaN(movie_age)){
        alert("please input all selections first");
      } else  {
      $("#movieTickets").text("You are going to see '" + movie_ticket.name + "' on " + movie_ticket.date
      + " at " + movie_ticket.time + " o'clock. Your ticket holder's age is " + movie_ticket.age + " years old.");
      $("#movieCost").text(movie_ticket.ticket());
      }
  });

});

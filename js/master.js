//Business Logic; BDD

function MovieTicket(name, time, age){
  this.name = name;
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

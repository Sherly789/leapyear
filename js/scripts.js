// Global variables


// Business Logic
var leapYear = function(year) {
  if (year%4===0){
    return true;
  }
  else {
    return false;
  }
};
//


// User Logic
$(document).ready(function(){
  $("form#leap-year").submit(function(){
    event.preventDefault();
    var year = parseInt($("#year").val());
    var result = leapYear(year);

    $("#result").text(result);

  });
});

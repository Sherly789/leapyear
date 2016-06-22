// Global variables


// Business Logic
var leapYear = function(year) {
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  } else if (year % 4 === 0 || year % 400 === 0) {
    return true;
  } else {
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

    $(".year").text(year);

    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").text();

  });
});

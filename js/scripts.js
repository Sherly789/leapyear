$(document).ready(function(){
  $("form#leap-year").submit(function(){
    event.preventDefault();
    var year = parseInt($("#year").val());
    // var result = leapYear(year);
    // $("#result").text(result);
    // TODO
    console.log(year);

  });
});

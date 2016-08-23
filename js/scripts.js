
var price = function(time, age) {
  return time + age;
}

$("form").submit(function() {
  event.preventDefault();
  $("#titles").val();
  var time = parseInt($("#times").val());
  var age = parseInt($("#ages").val());

  $("h3.ticket-price").text("$" + price(time, age));
});

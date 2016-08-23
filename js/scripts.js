function Ticket(title, time, age) {
  this.title = title;
  this.time = time;
  this.age = age;
  this.price=0;
}

Ticket.prototype.getPrice = function(timeVal, ageVal) {
  this.price = timeVal + ageVal;
}

var ticketsArray =[];

var totalPriceCalculator = function(tickets) {
  var total = 0;
  tickets.forEach(function(ticket){
    total += ticket.price;
  });
  return total;
}

$("form").submit(function() {
  event.preventDefault();
  var newTicket = new Ticket($("#titles").val(),$("#times :selected").text(), $("#ages :selected").text());
  var time = parseInt($("#times").val());
  var age = parseInt($("#ages").val());

  newTicket.getPrice(time, age);
  ticketsArray.push(newTicket);
  $("#tickets").append("<li>" + newTicket.title+": $" + newTicket.price + "</li>");
  $("#buyNow").show();

  $("#totalPrice").text(" $" + totalPriceCalculator(ticketsArray));
});

$("#buyNow").click(function() {
  $(".receipt").html("Thank you for your Purchase");
});

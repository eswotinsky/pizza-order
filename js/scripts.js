//back end
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.price = function() {
  var price = 0;
  price += ((this.toppings.length - 2) * 1.5);

  switch (this.size) {
    case "Small":
      price += 6;
      break;
    case "Medium":
      price += 11;
      break;
    case "Large":
      price += 13;
      break;
    default:
      price += 0;
      break;
  }
  return price.toFixed(2);
}

function readToppings() {
  var toppingsList = [];
  $("input[name=toppings]:checked").each(function(){
    toppingsList.push($(this).val());
  })
  return toppingsList;
}

function confirmToppings (toppings) {
  $("#confirmToppings").text("");
  toppings.forEach(function(topping){
    $("#confirmToppings").append("<li>" + topping + "</li>");
  })
}


//front end
$(function() {

  $("#orderPizza").click(function(){

    var orderToppings = readToppings();

    var orderSize = $("input[name=size]:checked").val();

    var myPizza = new Pizza(orderToppings, orderSize);

    $("#orderConfirmed").show();
    $("#confirmSize").text(orderSize);
    confirmToppings(orderToppings);
    $("#confirmPrice").text(myPizza.price());
  })


})

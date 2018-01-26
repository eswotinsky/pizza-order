//back end
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.price = function() {
  var price = 0;
  price += (this.toppings * 1.5);

  switch (this.size) {
    case "small":
      price += 5;
      break;
    case "medium":
      price += 10;
      break;
    case "large":
      price += 12;
      break;
    default:
      price += 0;
      break;
  }
  return price;
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

    var orderToppings = $("input[name=toppings]:checked").length;

    var orderSize = $("input[name=size]:checked").val();

    var myPizza = new Pizza(orderToppings, orderSize);

    var pizzaPrice = myPizza.price();

    var toppingsArray = readToppings();

    $("#orderConfirmed").show();
    $("#confirmSize").text(orderSize);
    confirmToppings(toppingsArray);

  })


})

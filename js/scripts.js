//back end
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.price = function() {
  var price = 0;
  var extraToppings = (this.toppings.length - 2) * 1.5;

//allows for 2 free toppings while preventing a price decrease for users who select less than 2 toppings
  if (extraToppings > 0) {
    price += extraToppings;
  }
//  price += ((this.toppings.length - 2) * 1.5);

  switch (this.size) {
    case "Small":
    price += 7;
    break;
    case "Medium":
    price += 11;
    break;
    case "Large":
    price += 14;
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

function confirmToppings(toppings) {
  if (toppings.length > 0) {
    $("#confirmToppings").text("");
    toppings.forEach(function(topping) {
      $("#confirmToppings").append("<li>" + topping + "</li>");
    })
  }
  else {
      $("#confirmToppings").text("no toppings selected");
  }
}


//front end
$(function() {

  $("form")[0].reset();

  $("#orderPizza").click(function() {

    var orderSize = $("input[name=size]:checked").val();

    if (orderSize == undefined) {
      alert("Please choose a size");
    }

    else {

      var orderToppings = readToppings();

      var myPizza = new Pizza(orderToppings, orderSize);

      $("#orderConfirmed").show();
      $("#confirmSize").text(orderSize);
      confirmToppings(orderToppings);
      $("#confirmPrice").text(myPizza.price());
    }

  })

})

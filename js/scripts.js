//back end

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.price = function() {

}



//front end
$(function) {

  $("#orderPizza").submit(function(event){
    event.preventDefault();

    var orderToppings = $("").val();
    var orderSize = $("").val();

    var myPizza = new Pizza();

  })


}

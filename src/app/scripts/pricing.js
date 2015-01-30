$(function() {
  var action;
  $('[data-toggle="tooltip"]').tooltip();
  $(".number-spinner button").click(function () {
    btn = $(this);
    input = btn.closest('.number-spinner').find('input');
    btn.closest('.number-spinner').find('button').prop("disabled", false);

    if (btn.attr('data-dir') == 'up') {
      // action = setInterval(function(){
        if ( input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max')) ) {
          var val = parseInt(input.val());
          var inc = val > 900 ? (val > 9000? 10000:1000):100;
          var newVal = val + inc;
          input.val(newVal);
          updatePrice(newVal);
        } else {
          btn.prop("disabled", true);
          clearInterval(action);
        }
      // }, 50);
    } else {
      // action = setInterval(function(){
        if ( input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min')) ) {
          var val = parseInt(input.val());
          var dec = val <= 1000 ? 100:(val <= 10000? 1000:10000);
          var newVal = val - dec;
          input.val(newVal);
          updatePrice(newVal);
        } else {
          btn.prop("disabled", true);
          clearInterval(action);
        }
      // }, 50);
    }
  }).mouseup(function(){
    clearInterval(action);
  });
});

var updatePrice = function(n) {
  var price = n * 0.025;
  if (n == 100) {
    price = 0;
  }
  $("#plan-price").html("$" + price.toFixed(2));
}
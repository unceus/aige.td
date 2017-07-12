$(document).ready(function() {
  var randomDelay = function() {
    return Math.ceil(Math.random() * 5000);
  },
  goodEnough = function() {
    $('.goodEnoughContainer').show();
    $('.thinkingContainer').hide();
    //todo: css fade out
  };

  window.setTimeout(goodEnough, randomDelay());
});

// JavaScript Document
$(window).load(function(){
        $('#slider').nivoSlider();
});

setInterval(function() {
      var now = (new Date()).toLocaleString();
      $('#show').text(now);
  }, 1000);
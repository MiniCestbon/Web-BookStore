// JavaScript Document
'use strict';

$(function(){
    $('#slider').nivoSlider();
});

setInterval(function() {
      var now = (new Date()).toLocaleString();
      $('#show').text(now);
  }, 1000);

$(function () {
    $('.btn-group :button').click(function () {        
        $(".btn-content .aaa").eq($(this).index()).show().siblings().hide();
    })
});

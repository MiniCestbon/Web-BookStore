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

$("#selectAll").click(function () {
    if ($(this).prop("checked")) {
        $(".item").each(function () {
            $(this).prop("checked", true);
        });
    } else {
        $(".item").each(function () {
            $(this).prop("checked", false);
        });
    }
    $(".item").click(function () {
        $("#selectAll").prop('checked',
        $(".item").length == $(".item:checked").length);
        });
    });
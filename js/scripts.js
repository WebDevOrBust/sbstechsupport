$(function() {
    $(".carousel").carousel( { interval: newFunction(), pause: "false" } );

function newFunction() {
        return 2000;
    }

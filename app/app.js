var greeting = 'Howdy ';
var firstName = 'Molly';
var message = ', please check your order';

var welcome = greeting + firstName + message;

var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

var el = document.getElementById('greeting');
el.textContent = welcome;

var elSign = document.getElementById('sign');
elSign.textContent = sign;

var elTotalTiles = document.getElementById('totalTiles');
elTotalTiles.textContent = tiles;

var elSubtotal = document.getElementById('subtotal');
elSubtotal.textContent = '$' + subTotal;

var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;
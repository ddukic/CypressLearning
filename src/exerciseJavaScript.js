//1. 

var colors = ['white', 'green', 'red', 'blue', 'black'];
console.log("The memory of that scene for me is like a frame of film forever frozen at that moment: the " + colors[2] + " carpet, the " + colors[1] + " lawn, the " + colors[0] + " house, the leaden sky. The new president and his first lady. - Richard M. Nixon")

//2.

var colors = ['white', 'green', 'red', 'blue', 'black'];
for (var color of colors) {
    console.log(color);
}

//3.

var months = ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'];
for (var month of months) {
    console.log(month);
}

//4.

var a = [1, 2, 5, 7];
var b = [5, 1, 9];
if (a.length > b.length) {
    for (var num of a) {
        console.log(num);
    }
} else {
    for (var num of b) {
        console.log(num);
    }
}
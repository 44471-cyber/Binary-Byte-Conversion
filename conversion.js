let bytes = document.getElementById("bytes");
let kilobytes = document.getElementById("kilobytes");
let megabytes = document.getElementById("megabytes");
let gigabytes = document.getElementById("gigabytes");
let terabytes = document.getElementById("terabytes");

function divisionConverter(target, source, number) {
    target.value = source.value === "" || source.value < 0 ? "" : source.value / number;
}

function multiplicationConverter(target, source, number) {
    target.value = source.value === "" || source.value < 0 ? "" : source.value * number;
}
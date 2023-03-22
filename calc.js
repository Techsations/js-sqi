function show(digit) {
    let display = document.getElementById ('display');
    if (display.value === '0') {
        display.value = digit;
    } else {
        display.value += digit;
    }
}
function equalTo() {
    let equalTo = document.getElementById('display');
    equalTo.value = eval(equalTo.value);
    
}
function squareroot() {
    let squareroot = document.getElementById('display');
    squareroot.value = Math.sqrt(display.value)
}
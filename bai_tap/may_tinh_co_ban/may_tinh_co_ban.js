function result() {
    let result = eval(calculator.screen.value);
    console.log(result);
    calculator.screen.value = result;
}
function ec() {
    let EC = calculator.screen.value.length - 1;
    calculator.screen.value = calculator.screen.value.slice(0,EC);
}
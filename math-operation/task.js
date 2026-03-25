let num1 = prompt("eded daxil et dumbeley");
let num2 = prompt("eded daxil et yene dumbeley");
let operation = prompt("Istediyiniz emeliyyati daxil edin");
switch(operation) {
    case '1':
        alert(num1 + num2);
        break;
    case '2':
        alert(num1 - num2);
        break;
    case '3':
        alert(num1 * num2);
        break;
    case '4':
        alert(num1 / num2);
    default:
        alert("hec bir emeliyyat secmediniz");            
}
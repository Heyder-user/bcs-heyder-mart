let num1 = 8;
let num2 = 4;
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
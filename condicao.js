function compararNumeros(num1, num2) {
    if(num1 < num2) {
        return "numero 2 é maior"
     } else if(num1 == num2) {
       return "Os números sao iguais"
     
    }else {
        return "numero 1 é maior"
    }
}

function NumberCheck(numero) {
    if(numero > 0){
        return "número positivo"
    }else if (numero < 0) {
        return "número negativo"
    } else {
        return "número zero"
}
}
function dayOfTheWeek (dia) {
    switch(dia) {
        case 1:
            return "Sunday"
    case 2:
        return "Monday"
    case 3:
        return "tuesday"
    case 4:
        return "Wednesday"
    case 5: 
        return "Thursday"
    case 6: 
        return "Friday"
    case 7:
        return "Saturday"
        default:
            return "week day not found"
            }
}
    console.log(dayOfTheWeek(10))








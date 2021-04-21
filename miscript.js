var inputNum1=Number(prompt("Ingrese el primer número a comparar: "));
var inputNum2=Number(prompt("Ingrese el segundo número a comparar: "));
var inputNum3=Number(prompt("Ingrese el tercer número a comparar: "));

if(inputNum1>inputNum2) {
if (inputNum1>inputNum3){
    
        document.write('<h1>El número mayor es: </h1>' + inputNum1);

    }else{
        document.write('<h1>El número mayor es: </h1>'+ inputNum3);
    }}

    else if(inputNum2> inputNum3){
        document.write('<h1>El número mayor es: </h1>'  + inputNum2)
    }
    else{
        document.write('<h1>El número mayor es: </h1>'+ inputNum3);
    }


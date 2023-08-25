function promediar(number1, number2, number3) {
let promedio = (number1 + number2 + number3) / 3 
return promedio
}
function elevarcubo(numero) {
    let cubo = numero * numero * numero
    return cubo
}
let saldo = 0
function depo1() {
   console.log("tu saldo", saldo = saldo + 1) ;
    alert("Se ha depositado con exito, saldo actual " + saldo);
}
function depo10() {
    console.log("tu saldo", saldo = saldo + 10) ;
     alert("Se ha depositado con exito, saldo actual " + saldo);
 }
 function depo50() {
    console.log("tu saldo", saldo = saldo + 50) ;
     alert("Se ha depositado con exito, saldo actual " + saldo);
 }
 function depo100() {
    console.log("tu saldo", saldo = saldo + 100) ;
     alert("Se ha depositado con exito, saldo actual " + saldo);
 }
 function depo1000() {
    console.log("tu saldo", saldo = saldo + 1000) ;
     alert("Se ha depositado con exito, saldo actual " + saldo);
 }
 function saludo() {
     let nombre = prompt("ingrese su nombre")
     let apellido = prompt("ingrese su apellido")
     alert("bienvenid@ " + nombre + " " + apellido)
 }
 function multiplicar() {
     let n1 = prompt("ingrese numero a multiplicar")
     let n2 = prompt("ingrese numero por cual multiplicar")
     alert(n1 * n2)
 }
 function division() {
    let n1 = prompt("ingrese numero a dividir")
    let n2 = prompt("ingrese numero por cual dividir")
    alert(n1 / n2)
}
function sumar() {
    let a = prompt("ingrese numero a sumar")
    let b = prompt("ingrese numero para sumar")
    let resultado = (parseFloat(a) + parseFloat (b))
    alert(resultado)
}
function restar() {
    let n1 = prompt("ingrese numero a restar")
    let n2 = prompt("ingrese numero para restar")
    alert(n1 - n2)
}
function idk() {
    let n1 = prompt("ingrese numero")
    alert(n1 * n1 + 5)
}

"use strict";
// PRIMEIRA AULA
function arredondarValor(valor) {
    if (typeof valor === "number") {
        return Math.ceil(valor);
    }
    else {
        return Math.ceil(Number(valor)).toString();
    }
}
console.log(arredondarValor(230.68));

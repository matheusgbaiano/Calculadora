function calcular(tipo, valor){

var elemento = document.getElementById("painel")

    if(tipo === "acao"){

        if(valor === "c" ){
            elemento.value = ""
        }

        if(valor === "/" || valor === "*" || valor === "-" || valor === "+" || valor === "."){
            elemento.value += valor
        }

        if(valor === "="){
            var valorTot = eval(elemento.value)
            elemento.value = valorTot
        }

        if(valor === "del"){
            var valorTot = elemento.value
            elemento.value = valorTot.substring(0, valorTot.length - 1)
        }
    } 
    else if( tipo === "numero"){
        
        elemento.value += valor
    }
}
    
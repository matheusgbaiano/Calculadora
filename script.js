function calcular(tipo, valor){

    if(tipo === "acao"){

        if(valor === "c" ){
            document.getElementById("painel").value = ""
        }

        if(valor === "/" || valor === "*" || valor === "-" || valor === "+" || valor === "."){
            document.getElementById("painel").value += valor
        }

        if(valor === "="){
            var valorTot = eval(document.getElementById("painel").value)
            document.getElementById("painel").value = valorTot
        }
    } 
    else if( tipo === "numero"){
        
        document.getElementById("painel").value += valor
    }




}
    
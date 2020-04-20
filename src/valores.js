var tudo
var date,ano,dia,mes,p

var data= new Date()
var diaAtual = data.getDate()
var anoAtual = data.getFullYear()
var mesAtual = data.getMonth()

function valores(){
    
    p = document.querySelector('#saida')
    date = document.querySelector('#entradaData').value

    tudo = date.split("-")

    mes = parseInt(tudo[1])
    ano= parseInt(tudo[0])
    dia = parseInt(tudo[2])

    var mm = mesAtual > mes ? (mes - mesAtual)*-1 :  mesAtual - mes
    if (mesAtual < mes){
        mm = 11
        ano++
    }

    p.innerHTML = `Você tem ${anoAtual - ano} anos` 
    
}

//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];
let listaSorteados = []
let amigoSecreto = "";

function alterandoTexto(tag, texto){
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo(){
    nomeAmigo = document.querySelector('input').value;
    if (!(nomeAmigo == "")  && !(listaDeAmigos.includes(nomeAmigo))) {
        listaDeAmigos.push(nomeAmigo);
        alterandoTexto("listaAmigos", listaDeAmigos);
        //console.log (listaDeAmigos);
        alterandoTexto("resultado", "");
    }else{
        alert("Por favor digite um nome único e válido.");
    }
}

function sortearAmigo() {
    if (listaSorteados.length  < listaDeAmigos.length){
        let numeroSecreto = parseInt(Math.random() * listaDeAmigos.length);
        if (listaSorteados.includes(numeroSecreto)){
         return sortearAmigo();
        }else{
            alterandoTexto("resultado", "O seu amigo secreto é: " + listaDeAmigos[numeroSecreto]);
            amigoSecreto = listaDeAmigos[numeroSecreto];
            //console.log(amigoSecreto);
            listaSorteados.push(numeroSecreto);
        
        }
    
    }else{
        alterandoTexto("resultado", "Erro");
        alert("Por favor insira mais nomes para prosseguir.");
    }
}

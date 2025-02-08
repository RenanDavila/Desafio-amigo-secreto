//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let amigos = [];

function adicionarAmigo()
 {
    let amigo =  document.getElementById('amigo');
    if (amigo.value){
        amigos.push(amigo.value);
        amigo.value = "";
    } else {
        alert('Por favor, insira um nome')
    } 
    
    montarListaAmigos();
}

function montarListaAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    

    for(let i = 0; i < amigos.length; i++){
        listaAmigos.innerHTML += `<li>${i + 1}. ${amigos[i]}</li>`;
    }

}

function sortearAmigo(){
    if(amigos.length !== 0 ){
        let resultado = document.getElementById('resultado');
        let indice = Math.floor(Math.random() * amigos.length);

        resultado.innerHTML = amigos[indice];
    } else {
        alert('Lista de amigos está vazia');
    }

}

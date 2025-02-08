
# Projeto de Sorteio de Amigo Secreto

## Descrição
Este projeto implementa um simples sorteio de amigo secreto onde usuários podem adicionar nomes à lista e realizar um sorteio para ver quem será o amigo secreto de quem. O objetivo principal deste projeto é fortalecer habilidades em lógica de programação e familiarização com manipulações básicas do DOM usando JavaScript.

## Funcionalidades
- **Adicionar Amigos**: Permite ao usuário inserir nomes na lista de amigos para o sorteio.
- **Listar Amigos**: Exibe uma lista de todos os amigos adicionados.
- **Sortear**: Realiza o sorteio onde um nome é escolhido aleatoriamente da lista.

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript

## Como Usar
1. **Adicionar um Amigo**: Insira o nome do amigo no campo de texto e clique no botão "Adicionar" para incluí-lo na lista.
2. **Visualizar Lista de Amigos**: Após adicionar os amigos, a lista abaixo do campo de inserção será atualizada automaticamente mostrando todos os participantes.
3. **Realizar o Sorteio**: Clique no botão "Sortear" para escolher um amigo aleatório da lista. O nome sorteado será exibido na tela.

## Instalação
Não é necessário instalar nenhum software adicional para executar este projeto. Basta clonar o repositório ou baixar os arquivos e abrir o `index.html` em um navegador moderno.

## Código Exemplo
Aqui está um breve exemplo do JavaScript utilizado:

```javascript
let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo');
    if (amigo.value) {
        amigos.push(amigo.value);
        amigo.value = "";
        montarListaAmigos();
    } else {
        alert('Por favor, insira um nome');
    }
}

function montarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${i + 1}. ${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length !== 0) {
        let resultado = document.getElementById('resultado');
        let indice = Math.floor(Math.random() * amigos.length);
        resultado.innerHTML = amigos[indice];
    } else {
        alert('Lista de amigos está vazia');
    }
}
```

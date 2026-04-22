function verResultado() {
let pontos = 0; //começa zerado e vai somando
let erros = []; //guarda onde a pessoa errou. lista vazia chamada erros

//Pergunta 1
let p1 = document.querySelector('input[name="p1"]:checked'); //pega opção marcada da pergunta 1
if (p1) { // vê se respondeu
    pontos += Number(p1.value); //soma pontuação. pontos = pontos + Number... (mesma coisa)
    if (p1.value == "0") {
        erros.push("Separação do lixo"); // se errou, adiciona esse erro na lista
    }

}   

//Pergunta 2
let p2 = document.querySelector('input[name="p2"]:checked');
if (p2) {
    pontos += Number(p2.value);
    if (p2.value == "0") {
        erros.push("Descarte de óleo");
    }
}

//Pergunta 3
let p3 = document.querySelector('input[name=p3]:checked');
if (p3) {
    pontos += Number(p3.value);
    if (p3.value == "0") {
        erros.push("Descartes de pilhas")
    }
}

//Pergunta 4
let p4 = document.querySelector('input[name=p4]:checked');
if (p4) {
    pontos += Number(p4.value);
    if (p4.value == "0") {
        erros.push("Reaproveitamento de roupas")
    }
}

//Pergunta 5
let p5 = document.querySelector('input[name=p5]:checked');
if (p5) {
    pontos += Number(p5.value);
    if (p5.value == "0") {
        erros.push("Consciência ambiental")
    }
}


let mensagem = ""; //variável mensagem vazia pra montar depois

    if (pontos <= 3) {
        mensagem = "😬 Seu nível é baixo. Você pode melhorar bastante seus hábitos!";
    } else if (pontos <= 7) { //se não é <= 3, verifica esse
        mensagem = "🙂 Você está no caminho certo, mas ainda pode evoluir!";
    } else {
        mensagem = "🌱 Parabéns! Você tem ótimos hábitos sustentáveis!";
    }

    
    if (erros.length > 0) { // se a pessoa errou algo, logo é mais que 0. Dá dicas pra melhorar
        mensagem += "<br><br><strong>Dicas para melhorar:</strong><br>";

        for (let i = 0; i < erros.length; i++) { //pega todos os erros e mostra um por um na tela
            mensagem += "- Atenção com " + erros[i] + "<br>";
        }
    }
document.getElementById("res").innerHTML = mensagem;
}
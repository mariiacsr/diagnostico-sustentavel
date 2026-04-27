function verResultado() {
let pontos = 0; 
let erros = []; 

//Pergunta 1
let p1 = document.querySelector('input[name="p1"]:checked'); 
if (p1) { 
    pontos += Number(p1.value); 
    if (p1.value == "0") {
        erros.push("Separação do lixo"); 
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


let mensagem = ""; 

    if (pontos <= 3) {
        mensagem = "😬 Seu nível é baixo. Você pode melhorar bastante seus hábitos!";
    } else if (pontos <= 7) { 
        mensagem = "🙂 Você está no caminho certo, mas ainda pode evoluir!";
    } else {
        mensagem = "🌱 Parabéns! Você tem ótimos hábitos sustentáveis!";
    }

    
    if (erros.length > 0) { 
        mensagem += "<br><br><strong>Dicas para melhorar:</strong><br>";

        for (let i = 0; i < erros.length; i++) { 
            mensagem += "- Atenção com " + erros[i] + "<br>";
        }
    }
document.getElementById("res").innerHTML = mensagem;
}

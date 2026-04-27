function verResultado() {
let pontos = 0; 
let erros = []; 

//Pergunta 1
let p1 = document.querySelector('input[name="p1"]:checked'); 
if (p1) { 
    pontos += Number(p1.value); 
    if (p1.value == "0") {
        erros.push("Separar o lixo em recicláveis (papel, metal e plástico) e orgânicos, facilita a reciclagem e ajuda a reduzir o impacto ambiental. 😉 "); 
    }

}   

//Pergunta 2
let p2 = document.querySelector('input[name="p2"]:checked');
if (p2) {
    pontos += Number(p2.value);
    if (p2.value == "0") {
        erros.push("Evite jogar óleo na pia. Armazenar em garrafas e levar a pontos de coletas é uma forma mais segura e evita a poluição da água. 💧 ");
    }
}

//Pergunta 3
let p3 = document.querySelector('input[name=p3]:checked');
if (p3) {
    pontos += Number(p3.value);
    if (p3.value == "0") {
        erros.push("Pilhas são feitas de materiais específicos que precisam de descarte correto. Procurar pontos de coletas em mercados ou lojas é a forma mais segura. 📍 ")
    }
}

//Pergunta 4
let p4 = document.querySelector('input[name=p4]:checked');
if (p4) {
    pontos += Number(p4.value);
    if (p4.value == "0") {
        erros.push("Doe ou reutilize roupas. Isso reduz o desperdício e ajuda outras pessoas. 👕 ")
    }
}

//Pergunta 5
let p5 = document.querySelector('input[name=p5]:checked');
if (p5) {
    pontos += Number(p5.value);
    if (p5.value == "0") {
        erros.push("Pequenas atitudes fazem a diferença! Pensar antes de descartar já é um ótimo passo. 🤩 ")
    }
}
if (!p1 || !p2 || !p3 || !p4 || !p5) {
    alert("Responda todas as perguntas antes de ver o resultado!")
    return;
}


let mensagem = ""; 

    if (pontos <= 3) {
        mensagem = "😬 <strong>Seu nível é baixo. Você pode melhorar bastante seus hábitos!</strong>";
    } else if (pontos <= 7) { 
        mensagem = "🙂 <strong>Você está no caminho certo, mas ainda pode evoluir!</strong>";
    } else {
        mensagem = "🌱 <strong>Parabéns! Você tem ótimos hábitos sustentáveis!</strong>";
    }

    
    if (erros.length > 0) { 
        mensagem += "<br><br><strong>Relatório de resultados:</strong><br>";

        for (let i = 0; i < erros.length; i++) { 
            mensagem += "- Solução 👉" + erros[i] + "<br>";
        }
    }
document.getElementById("res").innerHTML = mensagem;
}

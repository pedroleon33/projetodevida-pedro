const botoes = document.querySelectorAll(".botoes");
console.log(botoes);

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function() {
        // Desabilitar o botão clicado
        botoes[i].disabled = true;

        // Remover a classe "ativo" de todos os botões
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
        }

        // Adicionar a classe "ativo" ao botão clicado
        botoes[i].classList.add("ativo");
    }
}

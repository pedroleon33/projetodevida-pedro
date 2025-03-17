// Seleciona todos os botões
const botoes = document.querySelectorAll(".botao");

// Função para esconder todas as subseções
function esconderTodasAsSubsecoes() {
    const subsecoes = document.querySelectorAll(".sub-secao, .sub-secao1, .sub-secao2, .sub-secao3");
    subsecoes.forEach(subsecao => {
        subsecao.style.display = 'none'; // Esconde todas as subseções
    });
}

// Adiciona o evento de clique aos botões
botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        // Esconde todas as subseções antes de mostrar a correspondente
        esconderTodasAsSubsecoes();

        // Desabilita todos os botões e remove a classe "ativo"
        botoes.forEach(b => {
            b.disabled = false; // Habilita todos os botões
            b.classList.remove("ativo"); // Remove a classe "ativo"
        });

        // Habilita o botão clicado e adiciona a classe "ativo"
        botao.disabled = true; // Desabilita o botão clicado
        botao.classList.add("ativo"); // Adiciona a classe "ativo" ao botão

        // Exibe a subseção relacionada ao botão clicado
        if (botao.id === 'formatura-btn') {
            document.getElementById('formatura-secao').style.display = 'block'; // Exibe a subseção de Formatura
        } else if (botao.id === 'graduacao-btn') {
            document.getElementById('graduacao-secao').style.display = 'block'; // Exibe a subseção de Terminar o Ensino Médio
        } else if (botao.id === 'viagem-btn') {
            document.getElementById('viagem-secao').style.display = 'block'; // Exibe a subseção de Viajar para o Exterior
        } else if (botao.id === 'aprendizado-btn') {
            document.getElementById('aprendizado-secao').style.display = 'block'; // Exibe a subseção de Aprender um Novo Idioma
        }
    });
});

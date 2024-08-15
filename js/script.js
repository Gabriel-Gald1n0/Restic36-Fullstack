const forms = document.querySelectorAll('.form');
const botoes = document.querySelectorAll('.btn');
const divButton = document.querySelector('.div-button');

// Define o botão "Entrar" como selecionado ao carregar a página
const botaoEntrar = document.querySelector('#entrar-btn');
botaoEntrar.classList.add('selecionado');
divButton.classList.add('active');
const larguraBotao = divButton.offsetWidth / botoes.length;
const deslocamento = larguraBotao * 0; // Índice 0 para o primeiro botão
divButton.style.setProperty('--posicao', `${deslocamento}px`);


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        
        desSelecionarBotao();
        botao.classList.add("selecionado");

        divButton.classList.add('active');

        selecionarForm();
        forms[indice].classList.add("selecionado");

        const larguraBotao = divButton.offsetWidth / botoes.length;
        const deslocamento = larguraBotao * indice;
        divButton.style.setProperty('--posicao', `${deslocamento}px`);
    });  
});

function desSelecionarBotao() {
    const botaoSelecionado = document.querySelector(".btn.selecionado");
        botaoSelecionado.classList.remove("selecionado");
}

function selecionarForm() {
    const formSelecionado = document.querySelector(".form.selecionado");
    formSelecionado.classList.remove("selecionado");
}





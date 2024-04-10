const botaoMaisProjetos = document.querySelector('.buttonMaisProjetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo');

botaoMaisProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function mostrarMaisProjetos(){
    projetosInativos.forEach(projetosInativos =>{
        projetosInativos.classList.add('ativo');
    });
}

function esconderBotao(){
    botaoMaisProjetos.classList.add('remover');
}

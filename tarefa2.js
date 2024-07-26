// Função para alterar o texto de todos os elementos <p> (Paragráfos).
function alterarTextoParagrafos() {
    const paragrafos = document.querySelectorAll('p');
    
    paragrafos.forEach(paragrafo => {
        paragrafo.textContent = 'Texto alterado';
    });
}


// Roda a função alterarTextoParagrafos ao entrar na pagina automaticamente.
window.onload = function () {
    alterarTextoParagrafos();

}

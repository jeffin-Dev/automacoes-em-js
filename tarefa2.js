// Função para alterar o texto de todos os elementos <p> (Paragráfos).
function alterarTextoParagrafos() {
    const paragrafos = document.querySelectorAll('p');
    
    paragrafos.forEach(paragrafo => {
        paragrafo.textContent = 'Texto alterado';
    });
}


alterarTextoParagrafos();

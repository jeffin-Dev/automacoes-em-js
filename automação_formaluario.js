// Função para preencher o formulário
function preencherFormulario() {

    const dados = {
        nomeCompleto: 'Jefferson Roberto',
        endereco: 'Rua das gaivotas, 123',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '08180-690',
        telefone: '31973093105',
        email: 'jefferson@gmail.com',
        numeroCartao: '1234 5678 9101 1121',
        validadeCartao: '12/25',
        codigoSeguranca: '345'
    };

    document.getElementById('nomeCompleto').value = dados.nomeCompleto;
    document.getElementById('endereco').value = dados.endereco;
    document.getElementById('cidade').value = dados.cidade;
    document.getElementById('estado').value = dados.estado;
    document.getElementById('cep').value = dados.cep;
    document.getElementById('telefone').value = dados.telefone;
    document.getElementById('email').value = dados.email;
    document.getElementById('numeroCartao').value = dados.numeroCartao;
    document.getElementById('validadeCartao').value = dados.validadeCartao;
    document.getElementById('codigoSeguranca').value = dados.codigoSeguranca;
}

// Função para validar o e-mail
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Função para validar e enviar o formulário
function validarEEnviarFormulario(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    if (!validarEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        return false;
    }

    alert('Formulário enviado com sucesso!');
    document.getElementById('formulario').submit();
}

// Adiciona os eventos ao carregar a página
window.onload = function() {
    preencherFormulario();

    document.getElementById('formulario').addEventListener('submit', validarEEnviarFormulario);
};
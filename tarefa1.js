// Função para preencher o formulário
function preencherFormulario() {

    const dados = {
        nomeCompleto: 'Jefferson Roberto',
        endereco: 'Rua das gaivotas, 123',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '08180-690',
        telefone: '31973093105',
        email: 'jefferson@@gmail.com',
        numeroCartao: '1234 5678 9101 1121',
        validadeCartao: '12/25',
        codigoSeguranca: '345'
    };

    nomeCompleto = document.getElementById('nomeCompleto').value = dados.nomeCompleto;
    endereco = document.getElementById('endereco').value = dados.endereco;
    cidade = document.getElementById('cidade').value = dados.cidade;
    estado = document.getElementById('estado').value = dados.estado;
    cep = document.getElementById('cep').value = dados.cep;
    telefone = document.getElementById('telefone').value = dados.telefone;
    email = document.getElementById('email').value = dados.email;
    numeroCartao = document.getElementById('numeroCartao').value = dados.numeroCartao;
    validadeCartao = document.getElementById('validadeCartao').value = dados.validadeCartao;
    codigoSeguranca = document.getElementById('codigoSeguranca').value = dados.codigoSeguranca;

    const dadosEnviados = {
        nomeCompleto: nomeCompleto,
        endereco: endereco,
        cidade: cidade,
        estado: estado,
        cep: cep,
        telefone: telefone,
        email: email,
        numeroCartao: numeroCartao,
        validadeCartao: validadeCartao,
        codigoSeguranca: codigoSeguranca
    };

    console.log('Dados enviados:', dadosEnviados);
    
    if (!validarEmail(email)) {
        console.log('E-mail inserido inválido.');
    }
    
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

    document.getElementById('formulario').submit();
}


// Adiciona os eventos ao carregar a página
window.onload = function () {
    preencherFormulario();

    document.getElementById('formulario').addEventListener('submit', validarEEnviarFormulario);
};

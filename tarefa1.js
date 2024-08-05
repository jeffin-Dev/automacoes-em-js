// Função para preencher o primeiro formulário com as informações: 
// - Nome Completo, telefone e email.
function preencherFormulario1() {
    const dados = {
        nomeCompleto: 'Jefferson Roberto',
        telefone: '31973093105',
        email: 'jefferson@gmail.com',
    };

    const nomeCompletoInput = getElementByXPath('/html/body/div/div[2]/form/div[1]/div[1]/input');
    const telefoneInput = getElementByXPath('/html/body/div/div[2]/form/div[1]/div[2]/input');
    const emailInput = getElementByXPath('/html/body/div/div[2]/form/div[1]/div[3]/input');

    if (nomeCompletoInput && telefoneInput && emailInput) {
        nomeCompletoInput.value = dados.nomeCompleto;
        telefoneInput.value = dados.telefone;
        emailInput.value = dados.email;

        if (!validarEmail(dados.email)) {
            alert('E-mail inserido inválido.');
        } else {
            var button = document.getElementById('next-btn');
            button.click();
        }
    } else {
        console.error('Um ou mais elementos do formulário não foram encontrados.');
    }
}
// Função para verificar se o e-mail é válido (Aqui estou levando em consideração que o input de e-mail receba o type= "text").
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function getElementByXPath(xpath) {
    return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

preencherFormulario1();

// Função para preencher o segundo formulário com as informações: 
// - CEP, Endereço, Cidade e Estado.
function preencherFormulario2() {
    const dados = {
        cep: '31742063',
        endereco: 'Rua Senador Teixeira da Costa, 180 - Floramar',
        cidade: 'Belo Horizonte',
        estado: 'Minas Gerais'
    };

    const cepInput = getElementByXPath('/html/body/div/div[2]/form/div[2]/div[1]/input');
    const enderecoInput = getElementByXPath('/html/body/div/div[2]/form/div[2]/div[2]/input');
    const cidadeInput = getElementByXPath('/html/body/div/div[2]/form/div[2]/div[3]/input');
    const estadoInput = getElementByXPath('/html/body/div/div[2]/form/div[2]/div[4]/input');

    if (cepInput && enderecoInput && cidadeInput && estadoInput) {
        cepInput.value = dados.cep;
        enderecoInput.value = dados.endereco;
        cidadeInput.value = dados.cidade;
        estadoInput.value = dados.estado;

        var button = document.getElementById('next-btn');
        button.click();
    } else {
        console.error('Um ou mais elementos do formulário não foram encontrados.');
    }
}

// Função para selecionar um elemento usando XPath
function getElementByXPath(xpath) {
    return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

preencherFormulario2();


// Função para preencher o terceiro formulário com as informações:
// - Nome do titular, Número do Cartão, Data de Validade e CVV.
function preencherFormulario3() {
    const dados = {
        titular: 'Jefferson Pereira',
        numero_cartao: '5270 1264 1187 7157',
        data_validade: '12/2025',
        cvv: '217'
    };

    const titularInput = getElementByXPath('/html/body/div/div[2]/form/div[3]/div[1]/input');
    const numero_cartaoInput = getElementByXPath('/html/body/div/div[2]/form/div[3]/div[2]/input');
    const data_validadeInput = getElementByXPath('/html/body/div/div[2]/form/div[3]/div[3]/input');
    const cvvInput = getElementByXPath('/html/body/div/div[2]/form/div[3]/div[4]/input');

    if (titularInput && numero_cartaoInput && data_validadeInput && cvvInput) {
        titularInput.value = dados.titular;
        numero_cartaoInput.value = dados.numero_cartao;
        data_validadeInput.value = dados.data_validade;
        cvvInput.value = dados.cvv;

        var button = document.getElementById('next-btn');
        button.click();
    } else {
        console.error('Um ou mais elementos do formulário não foram encontrados.');
    }
}

// Função para selecionar um elemento usando XPath
function getElementByXPath(xpath) {
    return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

preencherFormulario3();

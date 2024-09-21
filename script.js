// Obter o formulário e os campos de entrada
const form = document.getElementById('meuFormulario');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const assunto = document.getElementById('assunto');
const mensagem = document.getElementById('mensagem');

// Adicionar evento de envio ao formulário
form.addEventListener('submit', function(event) {
    // Limpar mensagens de erro anteriores
    limparErros();

    // Verificar se os campos estão preenchidos corretamente
    let valid = true;

    if (nome.value.trim() === '') {
        mostrarErro(nome, 'O campo nome é obrigatório.');
        valid = false;
    }

    if (email.value.trim() === '') {
        mostrarErro(email, 'O campo email é obrigatório.');
        valid = false;
    } else if (!validarEmail(email.value)) {
        mostrarErro(email, 'O email não é válido.');
        valid = false;
    }

    if (assunto.value.trim() === '') {
        mostrarErro(assunto, 'O campo assunto é obrigatório.');
        valid = false;
    }

    if (mensagem.value.trim() === '') {
        mostrarErro(mensagem, 'O campo mensagem é obrigatório.');
        valid = false;
    }

    // Impedir o envio do formulário se houver erros
    if (!valid) {
        event.preventDefault();
    }
});

// Função para mostrar mensagens de erro
function mostrarErro(campo, mensagem) {
    const erro = document.createElement('div');
    erro.className = 'erro';
    erro.innerText = mensagem;
    campo.parentElement.appendChild(erro);
}

// Função para limpar mensagens de erro
function limparErros() {
    const erros = document.querySelectorAll('.erro');
    erros.forEach(function(erro) {
        erro.remove();
    });
}

// Função para validar email
function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
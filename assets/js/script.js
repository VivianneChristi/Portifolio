// Função para validar o campo Nome
function validarNome() {
    var nomeInput = document.getElementById('nome');
    var nome = nomeInput.value.trim(); // Remove espaços em branco no início e no fim

    if (nome === '') {
        alert('Por favor, preencha o campo Nome.');
        return false;
    }

    if (nome.length > 50) {
        alert('O campo Nome deve ter no máximo 50 caracteres.');
        return false;
    }

    return true;
}

// Event listener para o campo Nome, limitando a entrada a 50 caracteres
var nomeInput = document.getElementById('nome');
nomeInput.addEventListener('input', function (event) {
    var nome = this.value.trim(); // Remove espaços em branco no início e no fim

    if (nome.length > 50) {
        // Se exceder 50 caracteres, corta o texto
        this.value = nome.slice(0, 50);
    }
});

// Função para validar o campo Email
function validarEmail() {
    var emailInput = document.getElementById('email');
    var email = emailInput.value.trim(); // Remove espaços em branco no início e no fim

    // Expressão regular para validar o formato de email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '') {
        alert('Por favor, preencha o campo Email.');
        return false;
    }

    if (!emailRegex.test(email)) {
        alert('Por favor, insira um endereço de email válido.');
        return false;
    }

    return true;
}

// Função para validar o campo Assunto
function validarAssunto() {
    var assuntoInput = document.getElementById('assunto');
    var assunto = assuntoInput.value.trim(); // Remove espaços em branco no início e no fim

    if (assunto === '') {
        alert('Por favor, preencha o campo Assunto.');
        return false;
    }

    if (assunto.length > 50) {
        alert('O campo Assunto deve ter no máximo 50 caracteres.');
        return false;
    }

    return true;
}

// Função para validar o formulário como um todo
function validarFormulario() {
    var nomeValido = validarNome();
    var emailValido = validarEmail();
    var assuntoValido = validarAssunto();

    // Se todos os campos forem válidos, retorne true para permitir o envio do formulário
    return nomeValido && emailValido && assuntoValido;
}

// Event listener para o envio do formulário
var form = document.querySelector('.formcontato__form');
form.addEventListener('submit', function (event) {
    // Verifica se o formulário é válido antes de enviar
    if (!validarFormulario()) {
        event.preventDefault(); // Impede o envio do formulário se ele não for válido
    }
});
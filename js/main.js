function redirect(url) {
    window.location.href = url;
}

function consultCEP() {
    const cep = document.querySelector('#cep').value.replace(/\D/g, '');

    if (cep.length !== 8) {
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert('CEP não encontrado. Tente novamente.');
                return;
            }

            document.querySelector('#localidade').value = data.localidade;
            document.querySelector('#uf').value = data.uf;
            document.querySelector('#logradouro').value = data.logradouro;
            document.querySelector('#bairro').value = data.bairro;
        })
        .catch(error => console.error(error));
}

function CTAClick() {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
}

function contactSubmit(event) {
    event.preventDefault();
    alert('Agradecemos pelo contato! Retornaremos em breve...');
    event.target.reset();
}
document.addEventListener('DOMContentLoaded', function() {
    console.log('Capacitec está pronto.');

    // Exemplo de chamada a uma API externa
    fetch('https://seu-backend-api.com/api/data')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Manipular os dados recebidos
        })
        .catch(error => console.error('Erro ao acessar a API:', error));
});

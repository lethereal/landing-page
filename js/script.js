const form = document.getElementById('form');

form.addEventListener('submit', (e) => 
{
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = 
    {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')
    let carregando = `<p>Salvando seus dados...</p>`
    let pronto = `<p>Dados salvos com sucesso!</p>`

    content.innerHTML = carregando
    setTimeout (() => 
    {
        content.innerHTML = pronto
    }, 1000)

    console.log(nome, email);
})
const form = document.getElementById('form-agenda');
let linhas = '';

form.addEventListener('submit' , function(e){
    e.preventDefault();

    const inputContato = document.getElementById ('contato');
    const inputTelefone = document.getElementById ('telefone');


    let linha = '<tr>';
    linha += `<td>${inputContato.value} </td>`;
    linha += `<td>${inputTelefone.value} </td>`;
    linha += '<tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputContato.value = '';
    inputTelefone.value = '';
    
})
const form = document.getElementById('form-agenda');
//const contato = [];

form.addEventListener('submit' , function(e){
    e.preventDefault();

    const inputContato = document.getElementById ('contato');
    const inputTelefone = document.getElementById ('telefone');

   // adicionaLinha();
    //atualizaTabela();
    let linha = '<tr>';
    linha += `<td>${inputContato.value} </td>`;
    linha += `<td>${inputTelefone.value} </td>`;
    linha += '<tr>';

    alert(` O Contato: ${inputContato.value} foi inserido na sua agenda!`);
})
/*
function adicionaLinha () {



    if(atividades.includes(inputNomeAtividade.value)){
        
    } else {

        atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value} </td>`;
    linha += `<td>${inputNotaAtividade.value} </td>`;


    linhas += linha;

    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';

}

function atualizaTabela (){
    const corpoTabela = document.querySelector ('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();
    
    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal(){
    
        let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    } 

     return somaDasNotas / notas.length;
    
}*/
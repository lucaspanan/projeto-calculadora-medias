const form = document.getElementById('form-atividade');
const emojiaprovado = '<img src="./images/aprovado.png" alt=emoji aprovado/>';
const emojireprovado = '<img src="./images/reprovado.png" alt=emoji reprovado/>';
atividades =[];
notas =[];
const spanAprovado='<span class="aprovado">aprovado</span>';
const spanReprovado='<span class="reprovado">reprovado</span>';
const NotaMinima= obterNotaMinima();

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarlinha();
    AtualizaTabela();
    AtualizaMediaFinal();
}) 

function obterNotaMinima() {
    let notaMinima;

    do {
        notaMinima = parseFloat(prompt('Digite a nota mínima (entre 0 e 10):'));
    } while (isNaN(notaMinima) || notaMinima < 0 || notaMinima > 10);

    return notaMinima;
}


function adicionarlinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById  ('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)){
        alert (`a atividade ${inputNomeAtividade.value} ja foi inserida`);
    }
    
    atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = "<tr>"
        linha += `<td> ${inputNomeAtividade.value}</td>`;
        linha += `<td> ${inputNotaAtividade.value}</td> `;
    linha += `<td> ${inputNotaAtividade.value >= NotaMinima ? emojiaprovado : emojireprovado } </td>`;
        linha += `</tr>`
    
        linhas += linha ; 



    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function AtualizaTabela(){
    const CorpoTabela= document.querySelector('tbody');
    CorpoTabela.innerHTML = linhas;
}

function AtualizaMediaFinal(){
    const mediaFInal = CalculaMediaFinal();
    document.getElementById('Media-Final-Valor').innerHTML= mediaFInal
    document.getElementById('Media-FInal-Resultado').innerHTML= mediaFInal >= NotaMinima ? spanAprovado
: spanReprovado};

function CalculaMediaFinal(){
    let SomeDasNotas = 0;
    for ( i = 0; i < notas.length; i++){
        SomeDasNotas += notas[i]
    }
    const media = SomeDasNotas / notas.length;
    return media;
}
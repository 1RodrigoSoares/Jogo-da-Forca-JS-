const listaFrutas = [
    {palavra: "maçã", dica: "É vermelha e faz croc quando morde"},
    {palavra: "banana", dica: "É amarela e macia"},
]

const listaProficoes = [
    {palavra: "médico", dica: "Ajudam aqueles que mais precisam"},
    {palavra: "bombeiro", dica: "Estão em calendários"},
]

const listaFilmes = [
    {palavra: "Harry Potter", dica: "Magia e Bruxaria"},
    {palavra: "As branquelas", dica: "Só fez sucesso no brasil"},
]




//TODA VEZ QUE MUDA A CAIXINHA DE SELEÇÃO DE TEMAS ELE ATUALIZA PARA PEGAR O VALOR ESCOLHIDO
function atualizaSelect(){
    const listaTemas = document.querySelector("#temas");
    const opcaoSelecionada =  listaTemas.options[listaTemas.selectedIndex];
    const valor = opcaoSelecionada.value;
    localStorage.setItem("temaSelecionado", valor); //Salva o tema escolhido na memoria;
}


function localizaTemaSelecionado(){
    const temaEscolhido = localStorage.getItem("temaSelecionado");
    return temaEscolhido;
}

//A PARTIR DO TEMA ESCOLHIDO RETORNA A LISTA CORRESPONDENTE
function pegaListaPeloTema()
{
    const tema = localizaTemaSelecionado();
    if(tema != null)
    {
        if(tema == "frutas")
        {
            return listaFrutas;
        }else if(tema == "profissoes")
        {
            return listaProficoes;
        }else if(tema == "filmes")
        {
            return listaFilmes;
        }
    }
    return listaFrutas;
}

function sorteiaPalavra(){
    const listaDoTema = pegaListaPeloTema();
    const qtdItensListaEscolhida = listaDoTema.length; 
    const numeroAleatorio = Math.floor(Math.random() * qtdItensListaEscolhida);
    const objPalavraSelecionada = listaDoTema[numeroAleatorio];
    return objPalavraSelecionada;
}


const oPalavraSelecionada = sorteiaPalavra(); //constante usada para pegar e guardar a palavra sorteada

function acenderTracosCertos(){
    const qtdLetrasPalavra = oPalavraSelecionada.palavra.length;
    const qtdParaPular = (14 - qtdLetrasPalavra) / 2; //Serve para pular a qtd de letras na hr de acender

    for(let i = qtdParaPular; i < qtdLetrasPalavra+qtdParaPular ; i++){
        const letraApagada = document.querySelector(`#letra${i+1}`);
        letraApagada.style.opacity = 100;
    }
}

function jogo(){
    acenderTracosCertos();

}
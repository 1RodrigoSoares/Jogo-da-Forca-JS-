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


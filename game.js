const listaFrutas = [
    {palavra: "maçã", dica: "É vermelha e faz croc quando morde"},
    {palavra: "banana", dica: "É amarela e macia"},
]

const listaProficoes = [
    {palavra: "médico", dica: "Ajudam aqueles que mais precisam"},
    {palavra: "bombeiro", dica: "Estão em calendários"},
]
const listaPalavras = [listaFrutas, listaProficoes];


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
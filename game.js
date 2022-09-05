const listaFrutas = [
    {palavra: "mxçã", dica: "É vermelha e faz croc quando morde"},
]

const listaProficoes = [
    {palavra: "médico", dica: "Ajudam aqueles que mais precisam"},
    {palavra: "bombeiro", dica: "Estão em calendários"},
]

const listaFilmes = [
    {palavra: "Harry Potter", dica: "Magia e Bruxaria"},
    {palavra: "As branquelas", dica: "Só fez sucesso no brasil"},
]

const oPalavraSelecionada = sorteiaPalavra(); //constante usada para pegar e guardar a palavra sorteada


const eBotaoA = document.querySelector("#botaoA");
const eBotaoB = document.querySelector("#botaoB");
const eBotaoC = document.querySelector("#botaoC");
const eBotaoD = document.querySelector("#botaoD");
const eBotaoE = document.querySelector("#botaoE");
const eBotaoF = document.querySelector("#botaoF");
const eBotaoG = document.querySelector("#botaoG");
const eBotaoH = document.querySelector("#botaoH");
const eBotaoI = document.querySelector("#botaoI");
const eBotaoJ = document.querySelector("#botaoJ");
const eBotaoK = document.querySelector("#botaoK");
const eBotaoL = document.querySelector("#botaoL");
const eBotaoM = document.querySelector("#botaoM");
const eBotaoN = document.querySelector("#botaoN");
const eBotaoO = document.querySelector("#botaoO");
const eBotaoP = document.querySelector("#botaoP");
const eBotaoQ = document.querySelector("#botaoQ");
const eBotaoR = document.querySelector("#botaoR");
const eBotaoS = document.querySelector("#botaoS");
const eBotaoT = document.querySelector("#botaoT");
const eBotaoU = document.querySelector("#botaoU");
const eBotaoV = document.querySelector("#botaoV");
const eBotaoW = document.querySelector("#botaoW");
const eBotaoX = document.querySelector("#botaoX");
const eBotaoY = document.querySelector("#botaoY");
const eBotaoZ = document.querySelector("#botaoZ");


eBotaoA.addEventListener("click", function(){
    verificaLetraEscolhida("a")
})

eBotaoB.addEventListener("click", function(){
    verificaLetraEscolhida("b")
})

eBotaoC.addEventListener("click", function(){
    verificaLetraEscolhida("c")
})

eBotaoD.addEventListener("click", function(){
    verificaLetraEscolhida("d")
})

eBotaoE.addEventListener("click", function(){
    verificaLetraEscolhida("e")
})

eBotaoF.addEventListener("click", function(){
    verificaLetraEscolhida("f")
})

eBotaoG.addEventListener("click", function(){
    verificaLetraEscolhida("g")
})

eBotaoH.addEventListener("click", function(){
    verificaLetraEscolhida("h")
})

eBotaoI.addEventListener("click", function(){
    verificaLetraEscolhida("i")
})

eBotaoJ.addEventListener("click", function(){
    verificaLetraEscolhida("j")
})

eBotaoK.addEventListener("click", function(){
    verificaLetraEscolhida("k")
})

eBotaoL.addEventListener("click", function(){
    verificaLetraEscolhida("l")
})

eBotaoM.addEventListener("click", function(){
    verificaLetraEscolhida("m")
})

eBotaoN.addEventListener("click", function(){
    verificaLetraEscolhida("n")
})

eBotaoO.addEventListener("click", function(){
    verificaLetraEscolhida("o")
})

eBotaoP.addEventListener("click", function(){
    verificaLetraEscolhida("p")
})

eBotaoQ.addEventListener("click", function(){
    verificaLetraEscolhida("q")
})

eBotaoR.addEventListener("click", function(){
    verificaLetraEscolhida("r")
})

eBotaoS.addEventListener("click", function(){
    verificaLetraEscolhida("s")
})

eBotaoT.addEventListener("click", function(){
    verificaLetraEscolhida("t")
})

eBotaoU.addEventListener("click", function(){
    verificaLetraEscolhida("u")
})

eBotaoV.addEventListener("click", function(){
    verificaLetraEscolhida("v")
})

eBotaoW.addEventListener("click", function(){
    verificaLetraEscolhida("w")
})

eBotaoX.addEventListener("click", function(){
    verificaLetraEscolhida("x")
})

eBotaoY.addEventListener("click", function(){
    verificaLetraEscolhida("y")
})

eBotaoZ.addEventListener("click", function(){
    verificaLetraEscolhida("z")
})



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

function acenderTracosCertos(){
    const qtdLetrasPalavra = oPalavraSelecionada.palavra.length;
    const qtdParaPular = (14 - qtdLetrasPalavra) / 2; //Serve para pular a qtd de letras na hr de acender

    for(let i = qtdParaPular; i < qtdLetrasPalavra+qtdParaPular ; i++){
        const letraApagada = document.querySelector(`#letra${i+1}`);
        letraApagada.style.opacity = 100;
    }
}

function ajustaLetraEscolhida(letra){
    let letrasDiferentes = [];
    if(letra == "c")
    {
        letrasDiferentes = ["c","ç"]
    }else if(letra == "a")
    {
        letrasDiferentes = ["a","â", "ã", "á","à"]
    }else if(letra == "e" )
    {
        letrasDiferentes = ["e", "é","ê" ]
    }else if(letra == "i")
    {
        letrasDiferentes = ["i","í"]
    }else
    {
        letrasDiferentes = [letra];
    }
    return letrasDiferentes;
}

function acendeLetra(){
    console.log("TEM ESSA LETRA");
}

function ajustaBoneco(){
    console.log("NÃO TEM ESSA LETRA");
}

function verificaLetraEscolhida(letra){
    let varia = 0
    const letrasEsc = ajustaLetraEscolhida(letra)
    for(let i = 0; i < letrasEsc.length; i++)
    {
        if(oPalavraSelecionada.palavra.includes(letrasEsc[i]) || oPalavraSelecionada.palavra.includes(letrasEsc[i].toUpperCase()))
        {
            acendeLetra();
            varia++;
            break;
        }
    }
    if(varia<1)
    {
        ajustaBoneco();
    }
}


function jogo(){
    acenderTracosCertos();

}
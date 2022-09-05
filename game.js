const listaFrutas = [
    {palavra: "Maçã", dica: "É vermelha e faz croc quando morde"},
]

const listaProficoes = [
    {palavra: "Médico", dica: "Ajudam aqueles que mais precisam"},
    {palavra: "Bombeiro", dica: "Estão em calendários"},
]

const listaFilmes = [
    {palavra: "Harry Potter", dica: "Magia e Bruxaria"},
    {palavra: "As branquelas", dica: "Só fez sucesso no brasil"},
]

const oPalavraSelecionada = sorteiaPalavra(); //constante usada para pegar e guardar a palavra sorteada
let letrasAcertadas = 0;
let letrasErradas = 0; 

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

//Funcao que poe os palitos na tela que representam cada letra da palavra
function acenderTracosCertos(){
    const qtdLetrasPalavra = oPalavraSelecionada.palavra.length;
    const qtdParaPular = Math.ceil((14 - qtdLetrasPalavra) / 2); //Serve para pular a qtd de letras na hr de acender
    let espacos = [];
    let temEspacos = false;
    let ind = 0;

    //For que localiza os indices que possuem espaço(Se possuirem)
    for(let i = 0; i < qtdLetrasPalavra; i++)
    {
        if(oPalavraSelecionada.palavra[i] == " ")
        {
            temEspacos = true;
            espacos[ind] = i;
            ind++;
        }
    }

    if(temEspacos)
    {
        for(let i = qtdParaPular; i < qtdLetrasPalavra+qtdParaPular ; i++)
        {
            for(let j = 0; j < espacos.length; j++)
            {
                const t = espacos[j];
                const x = t + qtdParaPular;
                if(i != x)
                {
                    const letraApagada = document.querySelector(`#letra${i+1}`);
                    letraApagada.style.opacity = 100;
                }
            }   
        }
    }else
    {
        for(let i = qtdParaPular; i < qtdLetrasPalavra+qtdParaPular ; i++)
        {
            const letraApagada = document.querySelector(`#letra${i+1}`);
            letraApagada.style.opacity = 100;
        }
    }
    
}

//Funcao que serve para resolver problema com caracteres acentuados e diferentes(ç)
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

//Encontra indice das letras que precisam ser "acendidas" na palavra
function encontraIndices(letras){
    let posicoesMudar = [];
    let indice = 0;
    for(let i = 0; i < oPalavraSelecionada.palavra.length; i++)
    {
        for(let j = 0; j < letras.length; j++)
        {
            if(oPalavraSelecionada.palavra[i] == letras[j] || oPalavraSelecionada.palavra[i] == letras[j].toUpperCase())
            {
                posicoesMudar[indice] = i;
                indice++;
        }   }     
    }
    return posicoesMudar;
}

function acendeLetra(letras)
{
    const qtdLetrasPalavra = oPalavraSelecionada.palavra.length;
    const qtdParaPular = Math.ceil((14 - qtdLetrasPalavra) / 2);
    const indices = encontraIndices(letras);
    for(let i = 0; i < indices.length; i++)
    {
        const letraAcender = document.querySelector(`#letra${indices[i] + qtdParaPular+1} `);
        letraAcender.textContent = oPalavraSelecionada.palavra[indices[i]];
        letrasAcertadas++;
    }
    verificaSeGanhou;
}

function acendeLetraErradas(letra)
{
    const letraErrada = document.querySelector(`#letra${letrasErradas+14}`);
    letraErrada.textContent = letra.toUpperCase();
}

//Ajusta a exibição do boneco de acordo com a quantidade de letras erradas
function ajustaBoneco(){
    const espacoForca = document.querySelector("#imgBonecoJogo");
    if(letrasErradas == 1)
    {
        espacoForca.src = "/img/hangman(cabeça).png";
    }else if(letrasErradas == 2)
    {
        espacoForca.src = "/img/hangman(cabeça+corpo).png";
    }else if(letrasErradas == 3)
    {
        espacoForca.src = "/img/hangman(cabeça+corpo+1braco).png";
    }else if(letrasErradas == 4)
    {
        espacoForca.src = "/img/hangman(cabeça+corpo+doisbracos).png";
    }else if(letrasErradas == 5)
    {
        espacoForca.src = "/img/hangman(quasecompleto).png";
    }else if(letrasErradas == 6)
    {
        espacoForca.src = "/img/hangman(completo).png";
    }else
    {
        espacoForca.src = "/img/hangman(morto).png";
    }
}

function verificaLetraEscolhida(letra){
    let achou = false;
    const letrasEsc = ajustaLetraEscolhida(letra)
    for(let i = 0; i < letrasEsc.length; i++)
    {
        if(oPalavraSelecionada.palavra.includes(letrasEsc[i]) || oPalavraSelecionada.palavra.includes(letrasEsc[i].toUpperCase()))
        {
            achou = true;
            break;
        }
    }
    if(achou)
    {
        acendeLetra(letrasEsc);
    }else{
        letrasErradas++;
        acendeLetraErradas(letra);
        ajustaBoneco();
    }
    desabilitaBotao(letra);
}

function desabilitaBotao(letra){
    const letraMaiuscula = letra.toUpperCase();
    const botao = document.querySelector(`#botao${letraMaiuscula}`);
    botao.disabled = true;
}

const verificaSeGanhou = setInterval(function(){
    if(letrasAcertadas == oPalavraSelecionada.palavra.length)
    {
        alert("PARABENS VOCÊ GANHOU");
    }
    else if(letrasErradas == 7)
    {
        alert("PERDEU!")
    }
},1000);


function jogo(){
    acenderTracosCertos();
}

jogo();
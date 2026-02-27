//AÇÕES
let chutePlayer;
let chuteAi;
let goleiroPlayer;
let goleiroAi;
let fase = "ataque"
//RESULTADO INICIAL
let disputa = true
let rodada = 1;
let golPlayer = 0;
let golAi = 0;
//RESTANTE
let restantePlayer = 5;
let restanteAi = 5;

const esquerda = document.getElementById("esquerda")
const centro = document.getElementById("centro")
const direita = document.getElementById("direita")
const bola = document.querySelector(".bola")
const goleiro = document.querySelector(".goleiro")
const placarPlayer = document.getElementById("contador-timeA")
const placarAi = document.getElementById("contador-timeB")
const mensagem = document.getElementById("mensagem")
const fim = document.getElementById("fim")

esquerda.addEventListener("click", () => jogar(1))
centro.addEventListener("click", () => jogar(2))
direita.addEventListener("click", () => jogar(3))

function atualizarPlacar(){
    placarPlayer.innerText = golPlayer
    placarAi.innerText = golAi
}

function cobrarPenalti(chute, goleiro){
    let fora = Math.floor(Math.random() * 100) + 1
    if (fora <= 0){
        return "Isooooola a bola"
    } if (chute === goleiro){
        return "DEFENDEEEEU o goleiro!"
    } return "GOOOOOOL!!"
}

function moverBola(direcao){
  const mobile = window.matchMedia("(max-width: 500px)").matches

  if (mobile) {
    if(direcao === 1){
          bola.style.height = "20px"
          bola.style.width = "20px"
          bola.style.left = "60px"
          bola.style.top = "165px"
      } if(direcao === 2){
          bola.style.height = "20px"
          bola.style.width = "20px"
          bola.style.left = "170px"
          bola.style.top = "140px"
      } if(direcao === 3){
          bola.style.height = "20px"
          bola.style.width = "20px"
          bola.style.left = "270px"
          bola.style.top = "165px"
      }
  } else {
    if(direcao === 1){
          bola.style.height = "30px"
          bola.style.width = "30px"
          bola.style.left = "200px"
          bola.style.top = "270px"
      } if(direcao === 2){
          bola.style.height = "30px"
          bola.style.width = "30px"
          bola.style.left = "410px"
          bola.style.top = "230px"
      } if(direcao === 3){
          bola.style.height = "30px"
          bola.style.width = "30px"
          bola.style.left = "600px"
          bola.style.top = "270px"
      }
  }
}

function resetarBola(){
  const mobile = window.matchMedia("(max-width: 500px)").matches
  
  if (mobile) {
    bola.style.height = "40px"
    bola.style.width = "40px"
    bola.style.left = "160px"
    bola.style.top = "300px"
  } else {
    bola.style.height = "45px"
    bola.style.width = "45px"
    bola.style.left = "410px"
    bola.style.top = "420px"
  }
}

function resetarGoleiro(){
  const mobile = window.matchMedia("(max-width: 500px)").matches
  
  if (mobile) {
    goleiro.src = "./img/neutro.png"
    goleiro.style.left = "120px"
  } else {
    goleiro.src = "./img/neutro.png"
    goleiro.style.left = "340px"
  }
}

function moverGoleiro(direcao){
  const mobile = window.matchMedia("(max-width: 500px)").matches

  if (mobile) {
    if (direcao === 1){
        goleiro.style.left = "50px"
    } if(direcao === 2){
        goleiro.style.left = "120px"
    } if(direcao === 3){
        goleiro.style.left = "175px"
    }
  } else {  
    if(direcao === 1){
        goleiro.style.left = "200px"
    } if(direcao === 2){
        goleiro.style.left = "340px"
    } if(direcao === 3){
        goleiro.style.left = "480px"
    }
  }
}

function trocarImagemGoleiro(direcao){
    if(direcao === 1){
        goleiro.src = "./img/esquerda.png"
    } 
    if(direcao === 2){
        goleiro.src = "./img/neutro.png"
    } 
    if(direcao === 3){
        goleiro.src = "./img/direita.png"
    }
}

function chute(direcao){
    chutePlayer = direcao
    goleiroAi = randomDirecao()
    moverBola(chutePlayer)
    moverGoleiro(goleiroAi)
    trocarImagemGoleiro(goleiroAi)
    let resultado = cobrarPenalti(chutePlayer, goleiroAi)
    if(resultado === "GOOOOOOL!!"){
        golPlayer++
    }
    restantePlayer--
    mensagem.innerText = "Partiu pra bola... " + resultado
    atualizarPlacar()    
}

function defesa(direcao){
    goleiroPlayer = direcao
    chuteAi = randomDirecao()
    moverGoleiro(goleiroPlayer)
    trocarImagemGoleiro(goleiroPlayer)
    moverBola(chuteAi)
    let resultado = cobrarPenalti(chuteAi, goleiroPlayer)
    if(resultado === "GOOOOOOL!!"){
        golAi++
    }
    restanteAi--
    mensagem.innerText = "Adversário foi pro chute... " + resultado
    atualizarPlacar()
}

function randomDirecao(){
    return Math.floor(Math.random() * 3) + 1
}

function jogar(direcao){
    if(!disputa) return
    if(fase === "ataque"){
        chute(direcao)
        fase = "defesa"
    }else{
        defesa(direcao)
        fase = "ataque"
        rodada++
    }
    verificarVitoria()
    setTimeout(resetarBola, 800)
    setTimeout(resetarGoleiro, 800)
}

function verificarVitoria(){
    if (golPlayer > golAi + restanteAi){
        fim.innerText = "Você venceu a disputa! Parabéns jogador."
        disputa = false
    } else if (golAi > golPlayer + restantePlayer){
        fim.innerText = "Você perdeu a disputa! Que pena."
        disputa = false
    } else if (restantePlayer === 0 && restanteAi === 0){
        if (golPlayer > golAi) {
            fim.innerText = "Você venceu a disputa! Parabéns jogador."
        } else if (golAi > golPlayer) {
            fim.innerText = "Você perdeu a disputa! Que pena."
        } else {
            fim.innerText = "Tudo igual! Vamos para as alternadas!"
            restantePlayer = 1
            restanteAi = 1
        }
    }
}
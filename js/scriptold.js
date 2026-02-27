let disputa = true;
let chutePlayer;
let chuteAi;
let goleiroPlayer;
let goleiroAi;
let rodada = 1;
let alternadaRodada = 1;
let golPlayer = 0;
let golAi = 0;
let restantePlayer = 5;
let restanteAi = 5;
let diferenca;
let playerDefendeu;
let aiDefendeu;
let fora;

const esquerda = document.getElementById("esquerda")
const centro = document.getElementById("centro")
const direita = document.getElementById("direita")
const bola = document.querySelector(".bola")
const goleiro = document.querySelector(".goleiro")

esquerda.addEventListener("click", () => chute(1))
centro.addEventListener("click", () => chute(2))
direita.addEventListener("click", () => chute(3))

function cobrarPenalti(chute, goleiro){
    fora = Math.floor(Math.random() * 100) + 1
    if (fora <= 15){
        return "fora"
    }
    if (chute === goleiro){
        return "defesa"
    }
    return "gol"
}

function moverBola(direcao){
    if(direcao === 1){
        bola.style.left = "300px"
        bola.style.top = "200px"
    }
    if(direcao === 2){
        bola.style.left = "430px"
        bola.style.top = "200px"
    }
    if(direcao === 3){
        bola.style.left = "560px"
        bola.style.top = "200px"
    }
}

function chute(direcao){
    chutePlayer = direcao
    moverBola(direcao)
    goleiroAi = Math.floor(Math.random() * 3) + 1
    let resultado = cobrarPenalti(chutePlayer, goleiroAi)
    console.log("Resultado:", resultado)
}

console.log("Comeeeeça a disputa de penaltis.")


while (disputa){
    console.log(`Rodada ${rodada}`)
    
    //Jogador chutando
    console.log("Escolha o canto para chutar.")
    chutePlayer = Math.floor(Math.random() * 3) + 1; //Sem prompt no terminal
  
    fora = Math.floor(Math.random() * 100 ) + 1;
    goleiroAi = Math.floor(Math.random() * 3) + 1;
    aiDefendeu = goleiroAi === chutePlayer;
  
    console.log("O jogador corre para a batida...")
    if (fora <= 15 ) {
      console.log("Ele isola a bola!")
    } else if (aiDefendeu === true) {
      console.log("O goleiro defendeu a bola!")
    } else {
      golPlayer++
      console.log("E ele marcou o gol!")
    }  
    console.log(`A disputa está em ${golPlayer} x ${golAi}.`)
    restantePlayer--

    diferenca = Math.abs(golAi - golPlayer) > restantePlayer;
    if (diferenca/*> restantePlayer*/) {
        break;
    }

    //Jogador defendento
    console.log("Escolha o canto para defender.")
    goleiroPlayer = Math.floor(Math.random() * 3) + 1; //Sem prompt no terminal
  
    fora = Math.floor(Math.random() * 100 ) + 1
    chuteAi = Math.floor(Math.random() * 3) + 1;
    playerDefendeu = goleiroPlayer === chuteAi
  
    console.log("O jogador corre para a batida...")
    if (fora <= 15 ) {
      console.log("Ele isola a bola!")
    } else if (playerDefendeu === true) {
      console.log("O goleiro defendeu a bola!")
    } else {
      golAi++
      console.log("E ele marcou o gol!")
    }  
    console.log(`A disputa está em ${golPlayer} x ${golAi}.\n`)
    restanteAi--

    diferenca = Math.abs(golAi - golPlayer) > restanteAi;
    if (diferenca/* > restanteAi*/){
        break;
    }

    if (rodada === 5 && golPlayer === golAi) {
        disputa = false;
    } else if (rodada === 5) {
        disputa = false 
    }

    rodada++
}

while (golPlayer === golAi){
    //cobranças alternadas/morte subita
    console.log("Vamos para as alternadas. Haja coração!")
    console.log(`Rodada de alternada ${alternadaRodada}`)
    
    //Jogador chutando
    console.log("Escolha o canto para chutar.")
    chutePlayer = Math.floor(Math.random() * 3) + 1; //Sem prompt no terminal
  
    fora = Math.floor(Math.random() * 100 ) + 1;
    goleiroAi = Math.floor(Math.random() * 3) + 1;
    aiDefendeu = goleiroAi === chutePlayer;
  
    console.log("O jogador corre para a batida...")
    if (fora <= 15 ) {
      console.log("Ele isola a bola!")
    } else if (aiDefendeu === true) {
      console.log("O goleiro defendeu a bola!")
    } else {
      golPlayer++
      console.log("E ele marcou o gol!")
    }  
    console.log(`A disputa está em ${golPlayer} x ${golAi}.`)

    //Jogador defendento
    console.log("Escolha o canto para defender.")
    goleiroPlayer = Math.floor(Math.random() * 3) + 1; //Sem prompt no terminal
  
    fora = Math.floor(Math.random() * 100 ) + 1
    chuteAi = Math.floor(Math.random() * 3) + 1;
    playerDefendeu = goleiroPlayer === chuteAi
  
    console.log("O jogador corre para a batida...")
    if (fora <= 15 ) {
      console.log("Ele isola a bola!")
    } else if (playerDefendeu === true) {
      console.log("O goleiro defendeu a bola!")
    } else {
      golAi++
      console.log("E ele marcou o gol!")
    }  
    console.log(`A disputa está em ${golPlayer} x ${golAi}.\n`)

    alternadaRodada++
}

if (golPlayer > golAi) {
  console.log("O time é campeão nos penaltis, comemora muito a torcida!")
} else {
  console.log("O time perde a final nos penaltis... que tristeza!")
}
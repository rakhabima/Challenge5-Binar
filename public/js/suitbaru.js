const batuPlayer = document.getElementById("batuPlayer")
const kertasPlayer = document.getElementById("kertasPlayer")
const guntingPlayer = document.getElementById("guntingPlayer")
const result = document.getElementById("result")
const refresh = document.getElementById("refresh")
const text = document.getElementById("text")


const playerChoice = [batuPlayer, kertasPlayer, guntingPlayer]
for (let i = 0; i < playerChoice.length; i++) {
    playerChoice[i].addEventListener("click", () => {
        playerChoice[i].classList.add("selected")
        console.log("kepijit")
        const playerSelect = playerChoice[i].className.split(" ")[0]
        gameResult(gamePlay(playerSelect, comRandom()))
        for (let j = 0; j < playerChoice.length; j++) {
            playerChoice[j].style.pointerEvents = "none"
        }
    })
}

const comRandom = () => {
    const comPlayer = ["batuCom", "kertasCom", "guntingCom"]
    const random = ~~(Math.random() * 3)
    const comChoice = document.getElementById(comPlayer[random])
    comChoice.classList.add("selected")
    return comChoice.className.split(" ")[0]
}

const gamePlay = (player, com) => {
    if (player == com) {
        return null
    } else if (((player == "batu") && (com == "kertas")) || ((player == "gunting") && (com == "batu")) || ((player == "kertas") && (com == "gunting"))) {
        return true
    } else {
        return false
    }
}

const gameResult = (gameRes) => {
    text.classList.add("rectangle")
    text.style.color = "white"   
    text.style.fontSize = "100px"
    switch (gameRes) {
        case true:
            text.innerHTML = "LOSE"
            break
        case false:
            text.innerHTML = "WIN"
            break
        case null:
            text.innerHTML = "DRAW"
            break
    }
}

refresh.addEventListener("click", () => {
    window.location.reload()
})

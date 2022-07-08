
// Set your name from prompt
var setp1Name;
var setp2Name;

// Random Number
var player1Random;
var player2Random;

// Player Wins

var p1Wins = 0;
var p2Wins = 0;

// Info

var round = 0;
var draws = 0;

// Elements

var resultTitle = document.querySelector(".container h1");

var player1Img = document.querySelector(".img1");
var player2Img = document.querySelector(".img2");

var p1Name = document.querySelectorAll(".playerName")[0];
var p2Name = document.querySelectorAll(".playerName")[1];

// Wins Title
var p1winTitle = document.querySelectorAll(".dice .wins")[0];
var p2winTitle = document.querySelectorAll(".dice .wins")[1];


var roundTitle = document.querySelector(".round");
var drawsTitle = document.querySelector(".draws");

console.log(p1Wins, p2Wins);


setNames();

function setNames() { 
    setp1Name = prompt("Enter name for Player 1");
    setp2Name = prompt("Enter name for Player 2");

    if (setp1Name.length === 0) { 
        p1Name.textContent = "Player 1";
    }
    else { 
        p1Name.textContent = setp1Name;
    }

    if (setp2Name.length === 0) { 
        p2Name.textContent = "Player 2";
    }
    else { 
        p2Name.textContent = setp2Name;   
    }
}


function Randomize() { 

    player1Random = Math.floor(Math.random() * 6) + 1;
    player2Random = Math.floor(Math.random() * 6) + 1;

    CheckResult();
}

function CheckResult() { 
    if(player1Random > player2Random) { 
        resultTitle.textContent = "🏆" + p1Name.textContent + " Win";
        document.title = "🏆" + p1Name.textContent + " Win";
        p1Wins++;
        p1winTitle.textContent = `Wins ${p1Wins}`;
    }
    
    else if (player2Random > player1Random) { 
        resultTitle.textContent = p2Name.textContent + " Win 🏆";
        document.title = p2Name.textContent + " Win 🏆";
        p2Wins++;
        p2winTitle.textContent = `Wins ${p2Wins}`;

    }
    else { 
        resultTitle.textContent = "⛔️ Draw ⛔️";
        document.title = "⛔️ Draw ⛔️";
        draws++;
        drawsTitle.textContent = `⛔️ Draw ${draws}`;
    } 

    if (p1Wins == p2Wins) { 
        p1winTitle.textContent = `😨 Wins ${p1Wins}`;
        p2winTitle.textContent = `😨 Wins ${p2Wins}`;
    }
    else if(p1Wins > p2Wins) { 
        p1winTitle.textContent = `👑 Wins ${p1Wins}`;
        p2winTitle.textContent = `😡 Wins ${p2Wins}`;
    }
    else if (p2Wins > p1Wins) {
        p2winTitle.textContent = `👑 Wins ${p2Wins}`;
        p1winTitle.textContent = `😡 Wins ${p1Wins}`;
    }

    Player1Dice();
    Player2Dice();
}

function Player1Dice() {
    player1Img.setAttribute("src", `images/dice${player1Random}.png`);

}
function Player2Dice() {
    player2Img.setAttribute("src", `images/dice${player2Random}.png`);
}

function RollAgain() { 
    Randomize();
    round++;
    roundTitle.textContent = `🎲 Round ${round}`;

    if(round === 25) { 
        EndGame();
    }
}

function changePlayer1Name() { 
    setp1Name = prompt("Player 1 Enter your new name");
}



function EndGame() { 
    document.querySelector(".btn").style.display = "none";
    resultTitle.textContent = "🛑 Game End, Thanks for playing";
    resultTitle.style.fontSize = "59px";
}
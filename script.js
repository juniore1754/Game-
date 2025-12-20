// LOADER + MUSIQUE
window.onload = () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("game").classList.remove("hidden");
        document.getElementById("music").play();
    }, 2500);
};

const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = false;
let mode = "";

const winConditions = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

cells.forEach(cell => {
    cell.addEventListener("click", handleCellClick);
});

function setMode(selectedMode) {
    mode = selectedMode;
    restartGame();
    statusText.textContent = "Tour du joueur X";
    gameActive = true;
}

function handleCellClick() {
    const index = this.dataset.index;
    if (board[index] || !gameActive) return;

    playMove(index, currentPlayer);

    if (mode === "solo" && gameActive) {
        setTimeout(aiMove, 500);
    }
}

function playMove(index, player) {
    board[index] = player;
    cells[index].textContent = player;
    checkResult(player);
}

function aiMove() {
    let emptyCells = board
        .map((v, i) => v === "" ? i : null)
        .filter(v => v !== null);

    if (emptyCells.length === 0) return;

    let randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    playMove(randomIndex, "O");
}

function checkResult(player) {
    for (let cond of winConditions) {
        if (cond.every(i => board[i] === player)) {
            statusText.textContent = `🎉 ${player} gagne`;
            gameActive = false;
            return;
        }
    }

    if (!board.includes("")) {
        statusText.textContent = "🤝 Match nul";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Tour du joueur ${currentPlayer}`;
}

function restartGame() {
    board = ["","","","","","","","",""];
    cells.forEach(c => c.textContent = "");
    currentPlayer = "X";
    gameActive = true;
}

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// VOITURE
const car = {
    x: canvas.width / 2,
    y: canvas.height - 120,
    width: 40,
    height: 70,
    speed: 5,
    color: "red"
};

// CHARGEMENT
setTimeout(() => {
    document.getElementById("loadingScreen").style.display = "none";
    canvas.style.display = "block";
    startGame();
}, 3000);

// CONTROLES CLAVIER
window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") car.x -= car.speed;
    if (e.key === "ArrowRight") car.x += car.speed;
    if (e.key === "ArrowUp") car.y -= car.speed;
    if (e.key === "ArrowDown") car.y += car.speed;
});

// CONTROLES TACTILES
document.getElementById("left").onclick = () => car.x -= car.speed;
document.getElementById("right").onclick = () => car.x += car.speed;
document.getElementById("up").onclick = () => car.y -= car.speed;
document.getElementById("down").onclick = () => car.y += car.speed;

// JEU
function startGame() {
    requestAnimationFrame(gameLoop);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // ROUTE
    ctx.fillStyle = "#444";
    ctx.fillRect(canvas.width / 4, 0, canvas.width / 2, canvas.height);

    // VOITURE
    ctx.fillStyle = car.color;
    ctx.fillRect(car.x, car.y, car.width, car.height);

    requestAnimationFrame(gameLoop);
}

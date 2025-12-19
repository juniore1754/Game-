const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/* ================= VOITURES ================= */
const cars = {
    raptor: { name: "RAPTOR F1", color: "#ff2a2a", speed: 6 },
    voltex: { name: "VOLTEX GT", color: "#00ffcc", speed: 5 },
    phantom: { name: "PHANTOM R", color: "#ffffff", speed: 4 }
};

let selectedCar = cars.raptor;

/* ================= JOUEUR ================= */
const car = {
    x: canvas.width / 2 - 20,
    y: canvas.height - 120,
    width: 40,
    height: 70,
    speed: selectedCar.speed
};

/* ================= LOADING ================= */
setTimeout(() => {
    document.getElementById("loadingScreen").style.display = "none";
    canvas.style.display = "block";
    startGame();
}, 3000);

/* ================= CONTROLES ================= */
window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") car.x -= car.speed;
    if (e.key === "ArrowRight") car.x += car.speed;
    if (e.key === "ArrowUp") car.y -= car.speed;
    if (e.key === "ArrowDown") car.y += car.speed;
});

document.getElementById("left").onclick = () => car.x -= car.speed;
document.getElementById("right").onclick = () => car.x += car.speed;
document.getElementById("up").onclick = () => car.y -= car.speed;
document.getElementById("down").onclick = () => car.y += car.speed;

/* ================= JEU ================= */
function startGame() {
    requestAnimationFrame(gameLoop);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Route
    ctx.fillStyle = "#333";
    ctx.fillRect(canvas.width / 4, 0, canvas.width / 2, canvas.height);

    // Ligne centrale
    ctx.strokeStyle = "#fff";
    ctx.setLineDash([20, 20]);
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);

    // Voiture
    ctx.fillStyle = selectedCar.color;
    ctx.fillRect(car.x, car.y, car.width, car.height);

    // Nom voiture
    ctx.fillStyle = "#00ffcc";
    ctx.font = "16px Arial";
    ctx.fillText(selectedCar.name, 10, 30);

    requestAnimationFrame(gameLoop);
}

/* ================= CHANGER DE VOITURE ================= */
function changeCar(type) {
    selectedCar = cars[type];
    car.speed = selectedCar.speed;
}

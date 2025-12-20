body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #020617;
    color: white;
    text-align: center;
}

/* LOADER */
#loader {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.glow {
    font-size: 34px;
    animation: glow 1.5s infinite alternate;
}

@keyframes glow {
    from { text-shadow: 0 0 10px cyan; }
    to { text-shadow: 0 0 25px cyan; }
}

.spinner {
    margin-top: 20px;
    width: 40px;
    height: 40px;
    border: 4px solid #334155;
    border-top: 4px solid cyan;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

.hidden {
    display: none;
}

/* JEU */
.board {
    display: grid;
    grid-template-columns: repeat(3, 90px);
    gap: 12px;
    justify-content: center;
    margin: 20px auto;
}

.cell {
    width: 90px;
    height: 90px;
    background: #1e293b;
    font-size: 42px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.cell:hover {
    background: #334155;
}

button {
    padding: 10px 20px;
    margin: 6px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
}

.modes {
    margin-bottom: 10px;
}

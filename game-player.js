
let currentGame = null;

function initGamePlayer() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');

    currentGame = gamesDatabase.find(g => g.id === gameId) || gameDatabase[0];

    document.getElementById('game-logo').textContent = currentGame.game_logo;
}

function startDemo() {
    if (!currentGame) {
        console.error("No game selected for demo.");
        return;
    }
    const container = document.getElementById('game-embed-container');
    container.innerHTML = `
        <iframe src="${currentGame.demo_embed}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
    `;
}

document.addEventListener('DOMContentLoaded', initGamePlayer);

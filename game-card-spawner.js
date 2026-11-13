
function loadGameList() {
    const gameListContainer = document.getElementById('game-list');
    gamesDatabase.forEach((game, index) => {
        gameListContainer.innerHTML += `
            <div class="game-card" id="card-${index}"
            style="background-color: ${game.color_style["bg-color"]};color: ${game.color_style["font-color"]};"
            data-aos="fade-up" data-aos-duration="1000">
                <div class="card-banner">
                    <img 
                    src="${game.vertical_capsule}" 
                    alt="${game.title} Main Capsule" 
                    class="game-image"
                    id="game-image-${index}">
                    <div class="banner-gradient-overlay" style="background: linear-gradient(to bottom, transparent 30%, ${game.color_style["bg-color"]} 100%);"></div>
                </div>
                <div class="card-info">
                    <h2 class="card-title">${game.title}</h2>
                    <p class="card-genre">${game.genre}</p>
                    <!-- <p class="card-description">${game.description}</p> -->
                    <div class="card-buttons">
                        <a href="game-demo.html?id=${game.id}" 
                        style="border: 2px solid ${game.color_style["font-color"]};"
                        class="card-demo-link" target="_blank"> Play Demo! </a>
                        <a href="${game.steam_link}" 
                        style="border: 2px solid ${game.color_style["font-color"]};"
                        class="card-steam-link" target="_blank"> Steam Page </a>
                        <a href="game-info.html?gameId=${game.id}" 
                        style="border: 2px solid ${game.color_style["font-color"]};"class="card-more-info-link"> More Info </a>
                    </div>
                </div>
            </div>
        `;
    });

    VanillaTilt.init(document.querySelectorAll(".game-card"), {
        max: 10,
        speed: 900,
        glare: true,
        reverse: true,
        "max-glare": 0.1,
    });
}

function applyDominantColor(index) {
    const img = document.getElementById(`game-image-${index}`);
    const card = document.getElementById(`card-${index}`);

    // Pastikan gambar sudah benar-benar ter-load & bisa diakses
    if (img.complete) {
        try {
        const rgb = colorThief.getColor(img); // Mengembalikan array [r, g, b]
        
        // Pasang warna dominan ke background kartu (atau bagian border/tombol)
        card.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
        
        // Opsional: Bikin aksen warna transparan / lebih gelap untuk teks/overlay
        card.style.borderColor = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.8)`;
        } catch (e) {
        console.log("Gagal mengambil warna gambar:", e);
        }
    }
}




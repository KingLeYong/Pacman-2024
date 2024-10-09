let pacman = document.getElementById("pacman");
let playground = document.getElementById("playground");

let hammertime = new Hammer(playground);

let posX = 0, posY = 0;
let widthPlayground = playground.clientWidth;
let heightPlayground = playground.clientHeight;

// Fonction de déplacement
function movePacman(direction) {
    switch (direction) {
        case "gauche":
            if (posX > 0) {
                posX -= 50;
            }
            break;
        case "haut":
            if (posY > 0) {
                posY -= 50;
            }
            break;
        case "droite":
            if (posX < widthPlayground - 100) {
                posX += 50;
            }
            break;
        case "bas":
            if (posY < heightPlayground - 100) {
                posY += 50;
            }
            break;
    }
    pacman.style.transform = `translate(${posX}px, ${posY}px)`;
}

// Écouteur de clavier
window.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
        case 37: // flèche gauche
        case 81: // touche 'Q'
            movePacman("gauche");
            break;
        case 38: // flèche haut
        case 90: // touche 'Z'
            movePacman("haut");
            break;
        case 39: // flèche droite
        case 68: // touche 'D'
            movePacman("droite");
            break;
        case 40: // flèche bas
        case 83: // touche 'S'
            movePacman("bas");
            break;
    }
});

// Gestion des gestes tactiles avec Hammer.js
hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
hammertime.on("swipeleft swiperight swipeup swipedown", function (ev) {
    switch (ev.type) {
        case "swipeleft": // flèche gauche
            movePacman("gauche");
            break;
        case "swipeup": // flèche haut
            movePacman("haut");
            break;
        case "swiperight": // flèche droite
            movePacman("droite");
            break;
        case "swipedown": // flèche bas
            movePacman("bas");
            break;
    }
});


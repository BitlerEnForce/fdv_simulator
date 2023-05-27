function refreshInteraction() {
    if (x == 0 && y == 0 && z == 0) {
        monter.style.display = "none";
        haut.style.display = "block";
        desc.style.display = "none";
        gauche.style.display = "none";
        bas.style.display = "none";
        droite.style.display = "none";
    }
    if (x == 0 && y == 1 && z == 0) {
        monter.style.display = "none";
        haut.style.display = "block";
        desc.style.display = "none";
        gauche.style.display = "block";
        bas.style.display = "block";
        droite.style.display = "block";
    }
    if (x == -1 && y == 1 && z == 0) {
        monter.style.display = "none";
        haut.style.display = "block";
        desc.style.display = "none";
        gauche.style.display = "block";
        bas.style.display = "none";
        droite.style.display = "block";
    }
    if (x == -2 && y == 1 && z == 0) {
        monter.style.display = "none";
        haut.style.display = "block";
        desc.style.display = "none";
        gauche.style.display = "none";
        bas.style.display = "none";
        droite.style.display = "block";
    }
    if (x == 1 && y == 1 && z == 0) {
        monter.style.display = "none";
        haut.style.display = "block";
        desc.style.display = "none";
        gauche.style.display = "block";
        bas.style.display = "none";
        droite.style.display = "block";
    }
    if (x == 2 && y == 1 && z == 0) {
        monter.style.display = "none";
        haut.style.display = "block";
        desc.style.display = "none";
        gauche.style.display = "block";
        bas.style.display = "none";
        droite.style.display = "none";
    }
}

refreshInteraction();
function refreshInteraction4() {
    if (x == 0 && y == 4 && z == 0) {
        monter.style.display = "none";
        haut.style.display = "none";
        desc.style.display = "none";
        gauche.style.display = "block";
        bas.style.display = "block";
        droite.style.display = "none";
    }

    if (x == -1 && y == 4 && z == 0) {
        monter.style.display = "none";
        haut.style.display = "block";
        desc.style.display = "none";
        gauche.style.display = "none";
        bas.style.display = "none";
        droite.style.display = "block";
    }
}

refreshInteraction4();
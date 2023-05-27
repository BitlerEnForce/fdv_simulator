//x
droite.addEventListener("click", () => {
    x = x + 1;
    refreshAll()
})

gauche.addEventListener("click", () => {
    x = x - 1;
    refreshAll()
})

//y
haut.addEventListener("click", () => {
    y = y + 1;
    refreshAll()
})

bas.addEventListener("click", () => {
    y = y - 1;
    refreshAll()
})

//z
monter.addEventListener("click", () => {
    z = z + 1;
    refreshAll()
})

desc.addEventListener("click", () => {
    z = z - 1;
    refreshAll()
})

function refreshAll() {
    //console.log("x : " + x + ", y : " + y + ", z : " + z);
    xPrint.textContent = "x : " + x;
    yPrint.textContent = "y : " + y;
    zPrint.textContent = "z : " + z;
    boiteOuverte = false;
    refreshInteraction();
    refreshInteraction2();
    refreshInteraction3();
    refreshInteraction4();
    refreshInteraction5();
    refreshInteraction6();
    refreshEcran();
    refreshInventory();
    refreshDispositionObjet();
    refreshDispositionMusique();
    refreshPnjFixe();
}

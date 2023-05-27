function ajoutItem(type) {
    valeurPushable = type.toString();
    inventaire.push(valeurPushable);
    classePushable = classeListe.length + 1;
    classeListe.push(classePushable);
    console.log(inventaire);
    console.log(classeListe);
    refreshInventory();
}

function refreshDispositionObjet() {
    //rang 1
    if (x == 0 && y == 0 && z == 0 && impositionCompteur == -1) {
        var itemRamassable = document.createElement('div');
        itemRamassable.classList.add("item-ramassable");
        itemRamassable.style.backgroundImage = "url('../ressource/item/impositionRamassable.png')";
        itemRamassable.style.top = "500px";
        itemRamassable.style.left = "250px";
        ecran.appendChild(itemRamassable);
        itemRamassable.addEventListener("click", () => {
            itemRamassable.remove();
            ajoutItem("imposition");
            impositionCompteur = 1;
        })
    }

    //rang2
    if (x == 0 && y == 1 && z == 0) { ecran.innerHTML = ""; }
    if (x == -1 && y == 1 && z == 0) { ecran.innerHTML = ""; }
    if (x == -2 && y == 1 && z == 0) { ecran.innerHTML = ""; }
    if (x == 1 && y == 1 && z == 0) { ecran.innerHTML = ""; }
    if (x == 2 && y == 1 && z == 0 && styloCompteur == -1) {
        var itemRamassable = document.createElement('div');
        itemRamassable.classList.add("item-ramassable");
        itemRamassable.style.backgroundImage = "url('../ressource/item/stylo.png')";
        itemRamassable.style.top = "430px";
        itemRamassable.style.left = "10px";
        itemRamassable.style.height = "50px";
        itemRamassable.style.width = "50px";
        ecran.appendChild(itemRamassable);
        itemRamassable.addEventListener("click", () => {
            itemRamassable.remove();
            ajoutItem("stylo");
            styloCompteur = 1;
        })
    }

    //rang3
    if (x == 0 && y == 2 && z == 0) { ecran.innerHTML = ""; }
    if (x == -1 && y == 2 && z == 0) { ecran.innerHTML = ""; }
    if (x == -2 && y == 2 && z == 0 && casquetteCompteur == -1) { 
        var itemRamassable = document.createElement('div');
        itemRamassable.classList.add("item-ramassable");
        itemRamassable.style.backgroundImage = "url('../ressource/item/casquette.png')";
        itemRamassable.style.top = "430px";
        itemRamassable.style.left = "10px";
        itemRamassable.style.height = "50px";
        itemRamassable.style.width = "50px";
        ecran.appendChild(itemRamassable);
        itemRamassable.addEventListener("click", () => {
            itemRamassable.remove();
            ajoutItem("casquette");
            casquetteCompteur = 1;
        })
    }
    if (x == 1 && y == 2 && z == 0) { ecran.innerHTML = ""; }
    if (x == 2 && y == 2 && z == 0) { ecran.innerHTML = ""; }
}

refreshDispositionObjet();

function refreshInventory() {
    refreshEquipementSelectionneur();
    listeItem.innerHTML = "";
    const divInventaire2 = document.querySelector(".div-inventaire");
    for (var i = 0; i < inventaire.length; i++) {
        for (var o = 0; o < classeListe.length; o++) {

            // ----------- affichage -----------

            //papier lit moi
            if (inventaire[i] == "papierlitmoi") {
                var papierlitmoi = document.createElement('div');
                papierlitmoi.style.backgroundImage = "url('../ressource/item/papier/miniature.png')";
                papierlitmoi.classList.add(o);
                papierlitmoi.classList.add("item");
                papierlitmoi.classList.add("papierlitmoi");
                listeItem.appendChild(papierlitmoi);
                break
            }

            //stylo
            if (inventaire[i] == "stylo") {
                var stylo = document.createElement('div');
                stylo.style.backgroundImage = "url('../ressource/item/stylo.png')";
                stylo.classList.add(o);
                stylo.classList.add("item");
                stylo.classList.add("stylo");
                listeItem.appendChild(stylo);
                break
            }

            //imposition
            if (inventaire[i] == "imposition") {
                var imposition = document.createElement('div');
                imposition.style.backgroundImage = "url('../ressource/item/imposition.png')";
                imposition.classList.add(o);
                imposition.classList.add("item");
                imposition.classList.add("imposition");
                listeItem.appendChild(imposition);
                break
            }
            //casquette
            if (inventaire[i] == "casquette") {
                var casquette = document.createElement('div');
                casquette.style.backgroundImage = "url('../ressource/item/casquette.png')";
                casquette.classList.add(o);
                casquette.classList.add("item");
                casquette.classList.add("casquette");
                listeItem.appendChild(casquette);
                break
            }
        }
    }

    // ----------- interaction -----------
    if (papierlitmoi && inventaireOuvert == false) {
        papierlitmoi.addEventListener("click", () => {
            inventaireOuvert = true;
            var divInventaire = document.createElement('div');
            divInventaire.classList.add("div-inventaire");
            document.body.appendChild(divInventaire);
            divInventaire.style.backgroundImage = "url('../ressource/item/papier/papierlitmoi.png')";
            refreshInventory();
        })
    }
    if (divInventaire2 && inventaireOuvert == true) {
        divInventaire2.addEventListener("click", () => {
            inventaireOuvert = false;
            divInventaire2.remove();
            refreshInventory();
        })
    }

    //stylo
    if (stylo) {
        stylo.addEventListener("click", () => {
            if (selectionneur == "maingauche" && styloCompteur == 1) {
                if (mainGauche == "") {
                    styloCompteur = 0;
                    mainGauche = "stylo";
                    refreshEquipement();
                    selectionneur = "";
                    refreshEquipementSelectionneur();
                }
            }
        })
        stylo.addEventListener("click", () => {
            if (selectionneur == "maindroite" && styloCompteur == 1) {
                if (mainDroite == "") {
                    styloCompteur = 0;
                    mainDroite = "stylo";
                    refreshEquipement();
                    selectionneur = "";
                    refreshEquipementSelectionneur();
                }
            }
        })
    }
    //imposition
    if (imposition) {
        imposition.addEventListener("click", () => {
            if (selectionneur == "maingauche" && impositionCompteur == 1) {
                if (mainGauche == "") {
                    impositionCompteur = 0;
                    mainGauche = "imposition";
                    refreshEquipement();
                    selectionneur = "";
                    refreshEquipementSelectionneur();
                }
            }
        })
        imposition.addEventListener("click", () => {
            if (selectionneur == "maindroite" && impositionCompteur == 1) {
                if (mainDroite == "") {
                    impositionCompteur = 0;
                    mainDroite = "imposition";
                    refreshEquipement();
                    selectionneur = "";
                    refreshEquipementSelectionneur();
                }
            }
        })
    }
    //casquette
    if (casquette) {
        casquette.addEventListener("click", () => {
            if (selectionneur == "tete" && casquetteCompteur == 1) {
                if (tete == "") {
                    casquetteCompteur = 0;
                    tete = "casquette";
                    refreshEquipement();
                    selectionneur = "";
                    refreshEquipementSelectionneur();
                }
            }
        })
    }
    // ----------- equipement -----------
    refreshEquipement();
}

refreshInventory();


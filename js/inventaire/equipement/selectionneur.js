function refreshEquipementSelectionneur() {
    selectionneurMainGauche.addEventListener("click", () => {
        selectionneur = "maingauche";
        refreshEquipementSelectionneur()
    })
    selectionneurMainDroite.addEventListener("click", () => {
        selectionneur = "maindroite";
        refreshEquipementSelectionneur()
    })
    selectionneurBuste.addEventListener("click", () => {
        selectionneur = "buste";
        refreshEquipementSelectionneur()
    })
    selectionneurJambe.addEventListener("click", () => {
        selectionneur = "jambe";
        refreshEquipementSelectionneur()
    })
    selectionneurTete.addEventListener("click", () => {
        selectionneur = "tete";
        refreshEquipementSelectionneur()
    })
    if (selectionneur == "maindroite") {
        selectionneurMainDroite.style.backgroundColor = "rgb(180, 61, 61)";
        selectionneurBuste.style.backgroundColor = "transparent";
        selectionneurJambe.style.backgroundColor = "transparent";
        selectionneurMainGauche.style.backgroundColor = "transparent";
        selectionneurTete.style.backgroundColor = "transparent";
    }
    if (selectionneur == "maingauche") {
        selectionneurMainGauche.style.backgroundColor = "rgb(180, 61, 61)";
        selectionneurBuste.style.backgroundColor = "transparent";
        selectionneurJambe.style.backgroundColor = "transparent";
        selectionneurTete.style.backgroundColor = "transparent";
        selectionneurMainDroite.style.backgroundColor = "transparent";
    }
    if (selectionneur == "buste") {
        selectionneurBuste.style.backgroundColor = "rgb(180, 61, 61)";
        selectionneurJambe.style.backgroundColor = "transparent";
        selectionneurMainDroite.style.backgroundColor = "transparent";
        selectionneurMainGauche.style.backgroundColor = "transparent";
        selectionneurTete.style.backgroundColor = "transparent";
    }
    if (selectionneur == "jambe") {
        selectionneurJambe.style.backgroundColor = "rgb(180, 61, 61)";
        selectionneurBuste.style.backgroundColor = "transparent";
        selectionneurMainDroite.style.backgroundColor = "transparent";
        selectionneurMainGauche.style.backgroundColor = "transparent";
        selectionneurTete.style.backgroundColor = "transparent";
    }
    if (selectionneur == "tete") {
        selectionneurTete.style.backgroundColor = "rgb(180, 61, 61)";
        selectionneurBuste.style.backgroundColor = "transparent";
        selectionneurJambe.style.backgroundColor = "transparent";
        selectionneurMainDroite.style.backgroundColor = "transparent";
        selectionneurMainGauche.style.backgroundColor = "transparent";
    }
    if (selectionneur == "") {
        selectionneurTete.style.backgroundColor = "transparent";
        selectionneurBuste.style.backgroundColor = "transparent";
        selectionneurJambe.style.backgroundColor = "transparent";
        selectionneurMainDroite.style.backgroundColor = "transparent";
        selectionneurMainGauche.style.backgroundColor = "transparent";
    }
}
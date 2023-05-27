function refreshDescriptif() {
    //stylo
    if (stylo) {
        stylo.addEventListener("mouseover", () => {
            descriptif.textContent = "Stylo bic 4 couleurs, pour remplir les fiches d'imposition.";
            refreshDescriptif();
        })
        stylo.addEventListener("mouseout", () => {
            descriptif.textContent = "";
            refreshDescriptif();
        })
    }

    //imposition
    if (imposition) {
        imposition.addEventListener("mouseover", () => {
            descriptif.textContent = "Fiche d'imposition, pour imposer les fraudeurs.";
            refreshDescriptif();
        })
        imposition.addEventListener("mouseout", () => {
            descriptif.textContent = "";
            refreshDescriptif();
        })
    }

    //papierlitmoi
    if (papierlitmoi) {
        papierlitmoi.addEventListener("mouseover", () => {
            descriptif.textContent = "Instruction de l'URSSAF, lisez pour commprendre votre objectif.";
            refreshDescriptif();
        })
        papierlitmoi.addEventListener("mouseout", () => {
            descriptif.textContent = "";
            refreshDescriptif();
        })
    }

    //casquette
    if (casquette) {
        casquette.addEventListener("mouseover", () => {
            descriptif.textContent = "Casquette de RSAiste, protège des autre bénéficiaire d'aide sociale.";
            refreshDescriptif();
        })
        casquette.addEventListener("mouseout", () => {
            descriptif.textContent = "";
            refreshDescriptif();
        })
    }
}
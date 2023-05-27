function refreshMaingauche() {

    //stylo
    if (mainGauche == "stylo") {
        var mainGaucheImg = document.createElement('div');
        mainGaucheImg.style.backgroundImage = "url('../ressource/item/stylo.png')";
        mainGaucheImg.classList.add("item");
        mainGaucheImg.classList.add("mainGaucheImg");
        equipementInterface.appendChild(mainGaucheImg);
        mainGaucheImg.addEventListener("click", () => {
            styloCompteur = 1;
            mainGauche = "";
            mainGaucheImg.remove();
            refreshMaingauche();
        })
    }

    //imposition
    if (mainGauche == "imposition") {
        var mainGaucheImg = document.createElement('div');
        mainGaucheImg.style.backgroundImage = "url('../ressource/item/imposition.png')";
        mainGaucheImg.classList.add("item");
        mainGaucheImg.classList.add("mainGaucheImg");
        equipementInterface.appendChild(mainGaucheImg);
        mainGaucheImg.addEventListener("click", () => {
            impositionCompteur = 1;
            mainGauche = "";
            mainGaucheImg.remove();
            refreshMaingauche();
        })
    }

}
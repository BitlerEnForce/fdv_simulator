function refreshMainDroite() {

    //stylo
    if (mainDroite == "stylo") {
        var mainDroiteImg = document.createElement('div');
        mainDroiteImg.style.backgroundImage = "url('../ressource/item/stylo.png')";
        mainDroiteImg.classList.add("item");
        mainDroiteImg.classList.add("mainDroiteImg");
        equipementInterface.appendChild(mainDroiteImg);
        mainDroiteImg.addEventListener("click", () => {
            styloCompteur = 1;
            mainDroite = "";
            mainDroiteImg.remove();
            refreshMainDroite();
        })
    }

    //imposition
    if (mainDroite == "imposition") {
        var mainDroiteImg = document.createElement('div');
        mainDroiteImg.style.backgroundImage = "url('../ressource/item/imposition.png')";
        mainDroiteImg.classList.add("item");
        mainDroiteImg.classList.add("mainDroiteImg");
        equipementInterface.appendChild(mainDroiteImg);
        mainDroiteImg.addEventListener("click", () => {
            impositionCompteur = 1;
            mainDroite = "";
            mainDroiteImg.remove();
            refreshMainDroite();
        })
    }

}
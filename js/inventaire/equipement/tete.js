function refreshTete() {

    //casquette
    if (tete == "casquette") {
        var teteImg = document.createElement('div');
        teteImg.style.backgroundImage = "url('../ressource/item/casquette.png')";
        teteImg.classList.add("item");
        teteImg.classList.add("teteImg");
        equipementInterface.appendChild(teteImg);
        teteImg.addEventListener("click", () => {
            casquetteCompteur = 1;
            tete = "";
            teteImg.remove();
            refreshTete();
        })
    }
}
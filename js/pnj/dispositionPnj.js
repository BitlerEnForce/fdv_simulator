function refreshPnjFixe() {
    if (x == 0 && y == 3 && z == 0) {
        var pnjFixe = document.createElement('div');
        pnjFixe.classList.add("pnj-fixe");
        pnjFixe.style.backgroundImage = "url('../ressource/pnj/marcheur/dos.png')";
        pnjFixe.style.top = "150px";
        pnjFixe.style.left = "700px";
        ecran.appendChild(pnjFixe);
        pnjFixe.addEventListener("click", () => {
            if (boiteOuverte == false) {
                boiteOuverte = true;
                var pnjFixe = document.createElement('div');
                pnjFixe.classList.add("pnj-fixe");
                pnjFixe.style.backgroundImage = "url('../ressource/pnj/marcheur/face.png')";
                pnjFixe.style.top = "150px";
                pnjFixe.style.left = "700px";

                var boiteDialogue = document.createElement('div');
                boiteDialogue.classList.add("boite-dialogue");
                boiteDialogue.style.backgroundImage = "url('../ressource/dialogue/celestin.png')";
                boiteDialogue.style.top = "200px";
                boiteDialogue.style.left = "300px";
                refreshPnjFixe();
                ecran.innerHTML = "";
                ecran.appendChild(pnjFixe);
                ecran.appendChild(boiteDialogue);
            }

            boiteDialogue.addEventListener("click", () => {
                if (boiteOuverte == true) {
                    boiteOuverte = false;
                    ecran.innerHTML = "";
                    boiteDialogue.remove
                    refreshPnjFixe();
                }
            })
        })
    }
    if (x == 0 && y == 4 && z == 0) {
        ecran.innerHTML = "";
    }
}

refreshPnjFixe();

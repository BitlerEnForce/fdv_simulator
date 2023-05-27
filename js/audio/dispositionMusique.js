
function refreshDispositionMusique() {
    //rang 1
    if (x == 0 && y == 0 && z == 0) {
        musiqueCourante = "plaine"; 
        refreshMusique();
        console.log(musiqueCourante);
    }
    if (x == 0 && y == 4 && z == 0) {
        musiqueCourante = "foret"; 
        refreshMusique();
        console.log(musiqueCourante);
    }
}

refreshDispositionMusique();
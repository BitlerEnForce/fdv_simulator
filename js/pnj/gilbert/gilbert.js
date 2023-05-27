var positionGilbertXString;
var positionGilbertYString;
var positionGilbertZString;
var coordoneeRassemble;
var coordoneeRassembleTexte;

function rassemblerTexte(...variables) {
    return variables.join('');
}

function deplacementGilbert() {
    min = 1;
    max = 2;
    decisionDeplacementGilbert = Math.floor(Math.random() * (max - min + 1)) + min;
    //1 x
    //2 y
    if (decisionDeplacementGilbert == 1) {
        decisionOperationGilbert = Math.floor(Math.random() * (max - min + 1)) + min;
        //1 +
        if (decisionOperationGilbert == 1) {
            console.log("decision operation gilbert : " + decisionOperationGilbert);
            positionGilbertXTest = positionGilbertX + 1;
            positionGilbertXString = positionGilbertXTest.toString();
            positionGilbertYString = positionGilbertY.toString();
            positionGilbertZString = positionGilbertZ.toString();
            coordoneeRassemble = rassemblerTexte(positionGilbertXString, positionGilbertYString, positionGilbertZString);
            coordoneeRassembleTexte = coordoneeRassemble.toString();
            //console.log("position gilbert string x : " + positionGilbertXString);
            //console.log("position gilbert string y : " + positionGilbertYString);
            //console.log("position gilbert string z : " + positionGilbertZString);
            console.log("coordonée rassemblé : " + coordoneeRassemble);
            verificationCollision();
        }

        //2 -
        if (decisionOperationGilbert == 2) {
            console.log("decision operation gilbert : " + decisionOperationGilbert);
            positionGilbertXTest = positionGilbertX - 1;
            positionGilbertXString = positionGilbertXTest.toString();
            positionGilbertYString = positionGilbertY.toString();
            positionGilbertZString = positionGilbertZ.toString();
            coordoneeRassemble = rassemblerTexte(positionGilbertXString, positionGilbertYString, positionGilbertZString);
            coordoneeRassembleTexte = coordoneeRassemble.toString();
            //console.log("position gilbert string x : " + positionGilbertXString);
            //console.log("position gilbert string y : " + positionGilbertYString);
            //console.log("position gilbert string z : " + positionGilbertZString);
            console.log("coordonée rassemblé : " + coordoneeRassemble);
            verificationCollision();
        }
    }
}

var collisionDetecter = "introuver";

function verificationCollision() {
    for (var i = 0; i < listeCollisionGilbert.length; i++) {
        if (coordoneeRassembleTexte == listeCollisionGilbert[i]) {
            collisionDetecter = "trouver";
            console.log("collision !");
            //deplacementGilbert();
            /*if (decisionDeplacementGilbert == 1) {
                if (decisionOperationGilbert == 1) {
                    positionGilbertX = positionGilbertX - 2;
                    console.log("correction position x gilbert - 1");
                }
            }
            if (decisionDeplacementGilbert == 1) {
                if (decisionOperationGilbert == 2) {
                    positionGilbertX = positionGilbertX + 2;
                    console.log("correction position x gilbert + 1");
                }
            }*/
        }
    }

    console.log("detecter : " + collisionDetecter);
    if (decisionDeplacementGilbert == 1 && collisionDetecter == "introuver") {
        if (decisionOperationGilbert == 1) {
            positionGilbertX = positionGilbertX + 1;
            console.log("position x gilbert + 1");
        }
        if (decisionOperationGilbert == 2) {
            positionGilbertX = positionGilbertX - 1;
            console.log("position x gilbert - 1");
        }
    }

    console.log("x gilbert : " + positionGilbertX);
    console.log("y gilbert : " + positionGilbertY);
    console.log("z gilbert : " + positionGilbertZ);
    tempsIntervalDeplacementGilbert = 0;
    tempsIntervalDeplacementGilbert = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
}

tempsIntervalDeplacementGilbert = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;
var intervalDeplacementGilbert = setInterval(deplacementGilbert, 1000);
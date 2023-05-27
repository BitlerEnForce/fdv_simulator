function refreshEcran() {
    //rang 0
    if (x == 0 && y == 0 && z == 0) { ecran.style.background = "url('../ressource/plan/x0y0z0.png')"; }

    //rang1
    if (x == 0 && y == 1 && z == 0) { ecran.style.background = "url('../ressource/plan/x0y1z0.png')"; }
    if (x == -1 && y == 1 && z == 0) { ecran.style.background = "url('../ressource/plan/x-1y1z0.png')"; }
    if (x == -2 && y == 1 && z == 0) { ecran.style.background = "url('../ressource/plan/x-2y1z0.png')"; }
    if (x == 1 && y == 1 && z == 0) { ecran.style.background = "url('../ressource/plan/x1y1z0.png')"; }
    if (x == 2 && y == 1 && z == 0) { ecran.style.background = "url('../ressource/plan/x2y1z0.png')"; }

    //rang2
    if (x == 0 && y == 2 && z == 0) { ecran.style.background = "url('../ressource/plan/x0y2z0.png')"; }
    if (x == -1 && y == 2 && z == 0) { ecran.style.background = "url('../ressource/plan/x-1y2z0.png')"; }
    if (x == -2 && y == 2 && z == 0) { ecran.style.background = "url('../ressource/plan/x-2y2z0.png')"; }
    if (x == 1 && y == 2 && z == 0) { ecran.style.background = "url('../ressource/plan/x1y2z0.png')"; }
    if (x == 2 && y == 2 && z == 0) { ecran.style.background = "url('../ressource/plan/x2y2z0.png')"; }

    //rang3
    if (x == 0 && y == 3 && z == 0) { ecran.style.background = "url('../ressource/plan/x0y3z0.png')"; }

    //rang4
    if (x == 0 && y == 4 && z == 0) { ecran.style.background = "url('../ressource/plan/foret/x0y4z0.png')"; }
    if (x == -1 && y == 4 && z == 0) { ecran.style.background = "url('../ressource/plan/foret/x-1y4z0.png')"; }

    //rang5
    if (x == -1 && y == 5 && z == 0) { ecran.style.background = "url('../ressource/plan/foret/x-1y5z0.png')"; }

    //rang6
    if (x == -1 && y == 6 && z == 0) { ecran.style.background = "url('../ressource/plan/foret/manoir.png')"; }
}

refreshEcran();
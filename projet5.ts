

enum case_speciale { // définition d'un type énuméré pour les cases avec les effets
  normal,
  gagne_un_tour_supplémentaire,
  perd_un_tour,
  avance_de_quatre,
  recule_de_un
}

class joueur { //Définition d'une classe représentant un joueur dans le jeu
  constructor (public nom: string, public position: number =0) {}
}

class plateau_de_jeu { //définition de la classe pour le plateau de jeu
  cases: case_speciale[]; //tableau pour stocker les types de cases


  constructor (public taille: number) {
    //initialisation de toutes les cases comme normales
    this.cases = Array(taille).fill(case_speciale.normal);
    this.initialise_cases_speciales();
  }

  // Intialisation des cases spéciales pour les appeller à l'intérieur de la classe plateau de jeu
  private initialise_cases_speciales() {
    const cases_speciales = [ // Place les cases spéciales dans sur le plateau de jeu
      {index: 4, type: case_speciale.gagne_un_tour_supplémentaire},
      {index: 8, type: case_speciale.perd_un_tour},
      {index: 12, type: case_speciale.avance_de_quatre},
      {index: 16, type: case_speciale.recule_de_un}
    ];
  
    cases_speciales.forEach(({index, type}) => { // chaque case spéciale est ajouté à un plateau
      if(index < this.taille) {
        this.cases[index] = type;
      }
    });
  }
  
}


class jeu {
    joueurs: joueur[];
    plateau: plateau_de_jeu;
    tour_actuel: number = 0; // index du joueur qui doit jouer

    constructor(noms_joueurs: string[], taille_plateau: number) { //création des joueurs à partir de leur nom et d'un nouveau plateau
      this.joueurs = noms_joueurs.map(nom => new joueur(nom));
      this.plateau = new plateau_de_jeu(taille_plateau);
    }

  lancer_de_de(): number { //simulation du lancé de dé
    return Math.floor(Math.random()*6) +1;
  }

  jouer_un_tour() {
    const joueur = this.joueurs[this.tour_actuel];
    const resultat_de_de = this.lancer_de_de();
    joueur.position += resultat_de_de;

    if (joueur.position >= this.plateau.taille - 1) {
      joueur.position = this.plateau.taille -1;
      console.log(`${joueur.nom} a gagné !`);
      return true;
    }

    this.appliquer_effet_case(joueur);
    this.afficher_position();

    this.tour_actuel = (this.tour_actuel + 1) % this.joueurs.length; // passe au joueur d'après et refais la boucle à 3 % 3
    return false;
  }

  private appliquer_effet_case(joueur: joueur) { // application de l'effet de la case sur lequel le joueur se trouve
    const case_actuelle = this.plateau.cases[joueur.position];
    switch (case_actuelle) {
      case case_speciale.gagne_un_tour_supplémentaire:
        console.log(`${joueur.nom} gagne un tour supplémentaire !`);
        this.tour_actuel--;
        break;

      case case_speciale.perd_un_tour:
        console.log(`${joueur.nom} perd un tour !`);
        this.tour_actuel++;
        break;

      case case_speciale.avance_de_quatre:
        console.log(`${joueur.nom} avance de 4 cases !`);
        joueur.position = Math.min(joueur.position + 4, this.plateau.taille -1);
        break;
      
      case case_speciale.recule_de_un:
        console.log(`${joueur.nom} recul de une case !`);
        joueur.position = Math.max(joueur.position -1, 0);
        break;
    }
  }

  afficher_position(){ //affichage de la position des joueurs
    this.joueurs.forEach(joueur => {
      console.log(`${joueur.nom} est à la case ${joueur.position}`);
    });
    console.log('     ')
  }
}

const lancer_le_jeu = new jeu (['Manon', 'Louis', 'Romain'], 40); //Lancement du jeu avec 3 joueurs sur un plateau de 40 cases

while (true) { //boucle du jeu
  if (lancer_le_jeu.jouer_un_tour()) {
    break;
  }
  
}


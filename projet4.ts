
// 1. Fonction pour créer une matrice. 

function CreerMatrice(lignes: number, colonnes: number): number[][] {
    const matrice: number[][] = [];

    for (let i = 0; i < lignes; i++) {
        const ligne: number[] = [];
        for (let j = 0; j < colonnes; j++) {
            const element = Number(prompt(`Entrez l'élément' de la matrice à la position [${i + 1}][${j + 1}] :`));
            ligne.push(element);
        }
        matrice.push(ligne);
    }

    return matrice;
}


// 2. Fonction pour additionner deux matrices.

function AdditionnerMatrices(matriceA: number[][], matriceB: number[][]): number[][] | null {
    const lignesA = matriceA.length;
    const colonnesA = matriceA[0].length;
    const lignesB = matriceB.length;
    const colonnesB = matriceB[0].length;

    // Vérification si les dimensions sont compatibles.
    if (lignesA !== lignesB || colonnesA !== colonnesB) {
        console.error("Attention ! Les matrices doivent avoir les mêmes dimensions pour être additionnées.");
        return null;
    }

    const resultat: number[][] = [];
    for (let i = 0; i < lignesA; i++) {
        const ligne: number[] = [];
        for (let j = 0; j < colonnesA; j++) {
            ligne.push(matriceA[i][j] + matriceB[i][j]);
        }
        resultat.push(ligne);
    }

    return resultat;
}


// 3. Fonction pour multiplier deux matrices.

function MultiplierMatrices(matriceA: number[][], matriceB: number[][]): number[][] | null {
    const lignesA = matriceA.length;
    const colonnesA = matriceA[0].length;
    const lignesB = matriceB.length;
    const colonnesB = matriceB[0].length;

    // Vérification si les dimensions sont compatibles pour la multiplication.

    if (colonnesA !== lignesB) {
        console.error("Attention ! Le nombre de colonnes de la première matrice doit être égal au nombre de lignes de la deuxième matrice pour effectuer la multiplication.");
        return null;
    }

    const resultat: number[][] = [];
    for (let i = 0; i < lignesA; i++) {
        const ligne: number[] = [];
        for (let j = 0; j < colonnesB; j++) {
            let somme = 0;
            for (let k = 0; k < colonnesA; k++) {
                somme += matriceA[i][k] * matriceB[k][j];
            }
            ligne.push(somme);
        }
        resultat.push(ligne);
    }

    return resultat;
}


// 4. Fonction pour afficher une matrice.

function AfficherMatrice(matrice: number[][]): void {
    console.log("Résultat :");
    for (const ligne of matrice) {
        console.log(ligne.join(" "));
    }
}


// === Programme principal ===

// Saisie des dimensions et création des matrices
const lignesA = Number(prompt("Entrez le nombre de lignes de la première matrice :"));
const colonnesA = Number(prompt("Entrez le nombre de colonnes de la première matrice :"));
const matriceA = CreerMatrice(lignesA, colonnesA);

const lignesB = Number(prompt("Entrez le nombre de lignes de la deuxième matrice :"));
const colonnesB = Number(prompt("Entrez le nombre de colonnes de la deuxième matrice :"));
const matriceB = CreerMatrice(lignesB, colonnesB);


// Choix de l'opération
const operation = prompt("Entrez l'opération à effectuer : 'addition' ou 'multiplication' :");

if (operation === 'addition') {
    const resultat = AdditionnerMatrices(matriceA, matriceB);
    if (resultat) {
        AfficherMatrice(resultat);
    }
} else if (operation === 'multiplication') {
    const resultat = MultiplierMatrices(matriceA, matriceB);
    if (resultat) {
        AfficherMatrice(resultat);
    }
} else {
    console.error("Attention ! Opération non valide.");
}

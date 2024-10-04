function AnalyserTexte(donnees: string) {

// Enlever tous les espaces externes.

let texte = donnees.trim();


// 1. Compter le nombre de mots.

const mots = texte.split(/\s+/);
const comptermots = mots.length;


// 2. Compter le nombre de phrases (ici le regex inclue l'espace après la ponctuation).

const phrases = texte.match(/([^.?!]+[.!?]+(\s|$))/g);
const compterphrases = phrases ? phrases.length : 0;


// 3. Compter le nombre de caractères (sans les espaces).

const caracteressansespaces = texte.replace(/\s+/g, '');
const comptercaracteres = caracteressansespaces.length;


// 4. Analyser la fréquence des lettres (j'ai pris en compte les caractères spéciaux pour le texte français).

const frequencedelettres: { [key: string]: number } = {};
for (const caracteres of caracteressansespaces.toLowerCase()) {
    if (/[a-zàâäéèêëîïôöùûüç]/i.test(caracteres)) {
        frequencedelettres[caracteres] = (frequencedelettres[caracteres] || 0) + 1;
    }
}


// 5. Compter la fréquence des mots (j'ai pris en compte les caractères spéciaux pour le texte français).

const frequencedemots: { [key: string]: number } = {};
for (const mot of mots) {
    const nouveaumot = mot.toLowerCase().replace(/[^a-zàâäéèêëîïôöùûüç']/gi, '');
    if (nouveaumot) {
        frequencedemots[nouveaumot] = (frequencedemots[nouveaumot] || 0) + 1;
    }
}


 // 6. Trouver les mots les plus utilisés

 const motstries = Object.entries(frequencedemots).sort((a, b) => b[1] - a[1]);
 const motslesplusutilises = motstries.slice(0, 5); 


//  7. Afficher les résultats dans la console.

console.log("---Analyse de texte---");
console.log(`Nombre de mots : ${comptermots}`);
console.log(`Nombre de phrases : ${compterphrases}`);
console.log(`Nombre de caractères (sans espaces) : ${comptercaracteres}`);

console.log("\nFréquence des lettres :");
    for (const [lettre, count] of Object.entries(frequencedelettres)) {
        console.log(`${lettre} : ${count}`);
    }

    console.log("\nMots les plus utilisés :");
    for (const [mot, count] of motslesplusutilises) {
        console.log(`${mot} : ${count} fois`);
    }
}

AnalyserTexte("Il était une fois, un gentil canard qui marchait près d'un lac.");

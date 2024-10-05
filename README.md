Projet 1

Dans ce projet, il est question d'un programme qui génère aléatoirement des mots de passe.
Chaque mot de passe généré est unique en fonction des choix de l'utilisateur via différentes fonctionnalités.

Fonctionnalités

- Longueur personnalisée : L'utilisateur définit la longueur du mot de passe.

- Inclusion personnalisée de caractères : L'utilisateur peut choisir d'inclure des lettres majuscules, des chiffres et des symboles, et préciser combien de chaque type seront inclus.

- Remplissage automatique en minuscules : Si la longueur n'est pas entièrement remplie par les types sélectionnés, les caractères restants seront des lettres minuscules.

- Gestion des erreurs : Si le total des caractères sélectionnés dépasse la longueur choisie, une alerte est affichée et la génération est relancée.

Fonctionnement

- Demande de la longueur : L'utilisateur saisit la longueur souhaitée du mot de passe.

- Choix des types de caractères : L'utilisateur peut choisir d'inclure des majuscules, chiffres et symboles, et spécifie combien de chaque type doit être utilisé.

- Vérification de validité : Si la somme des majuscules, chiffres et symboles dépasse la longueur spécifiée, une alerte apparaît et l'utilisateur doit recommencer. 

- Génération du mot de passe : 

	• Les lettres majuscules, chiffres et symboles sont ajoutés selon les quantités choisies. 
  	• Les caractères restants sont remplis avec des lettres minuscules aléatoires.

- Affichage : Le mot de passe généré est affiché dans une boîte de dialogue ou dans la console.


PROJET 2

Le programme pour ce projet analyse un texte donné et affiche des statistiques notamment sur le nombre de mots, de caractère, de phrase.

Fonctionnalités

Ce programme permet de faire différente analyse à savoir :

- Compter le nombre de mots
- Compter le nombre de phrases
- Compter le nombre de caractères sans les espaces
- Analyser la fréquence des lettres en prenant en compte les caractères spéciaux pour le texte français
- Trouver les mots les plus utilisés

Utilisation

L'utilisateur utilise la fonction AnalyserTexte() en insérant le texte à analyser comme dans cet exemple : 

AnalyserTexte("Il était une fois, un gentil canard qui marchait près d'un lac."); il obtient ensuite les résultats dans la console.


PROJET 3

Ce projet simule une fille d'attente où des clients prioritaires ou non sont gérés.

Le programme comporte différentes fonctionnalités :

- Ajout de clients dans la file avec un statut prioritaire ou non

- Les clients prioritaires sont insérés avant les clients qui ne le sont pas

- Possibilité de suppression d'un client de la file d'attente par l'utilisation de son numéro de ticket

- Affichage de la file avec les détails sur chaque client


Utilisation

L'utilisation se fait à l'aide des méthodes du programme. Par exemple :

file_client.ajout_client(true ou false); pour l'ajout d'un client prioritaire ou non

file_client.supprimer_client(2); pour supprimer le client ayant le ticket numéro 2 de la file d'attente.

L'état de la file d'attente est égalemnt affiché dans la console.


PROJET 4

Le Projet 4 contient un programme qui effectue des opérations à savoir des additions et des multiplications sur des matrices.

Fonctionnalités

- Les dimensions des matrices sont personnalisables en fonction du choix de l'utilisateur
- L'utilisateur choisit chaque élément pour les différentes matrices
- Le résultat de l'opération est affiché sous forme de matrice

Utilisation

Lors de l'exécution du programme, l'utilisateur entre la dimension souhaitée pour la première matrice. Il choisit ensuite tous les éléments de cette matrice.
Après avoir fait de même la deuxième matrice, il écrit ensuite l'opération voulue et obtient le résultat de l'opération dans la console.


PROJET 5

Ce projet simule un jeu de l'oie dans lequel plusieurs joueurs se déplacent sur un plateau ayant différentes cases.

Fonctionnalités

- Plusieurs joueurs peuvent participer

- Les joueurs se déplacent sur un plateau composé de cases normales et de cases ayant des effets.

- Il y a quatre cases ayant des effets

	• Gagner un tour supplémentaire
	• Perdre un tour
	• Avancer de 4 cases
	• Reculer d'une case

- Les joueurs se déplacent après un lancé de dé

- Le jeu se termine lorsqu'un joueur atteint la dernière case du plateau.

Utilisation

L'utilisateur définit le nombre de cases du jeu en l'écrivant lui-même dans le programme. 
Il définit aussi les différents joueurs en écrivant leur nom.


PROJET 6

Le projet implémente un jeu du pendu avec des mots aléatoirement choisis. Pour le déroulement du jeu, le programme comporte différentes fonctionnalités.

Fonctionnalités

- Affichage du mot : Le mot à deviner est initialement caché et affiché sous forme de tirets (_).

- Saisie utilisateur : Le joueur entre une lettre à la fois pour deviner le mot caché.

- Gestion des erreurs : Si la lettre proposée est incorrecte, le nombre d'erreurs augmente. Le jeu permet un nombre limité d'erreurs.

- Victoire ou défaite : Si le joueur devine l'ensemble du mot avant d'épuiser ses essais, il gagne. Sinon, un message de défaite est affiché.

Utilisation

- Un mot est sélectionné aléatoirement à partir d'une liste de mots.

- Le mot est affiché sous forme de tirets représentant chaque lettre.

- Le joueur devine une lettre à la fois.

- Si la lettre devinée fait partie du mot, elle est révélée dans sa position correcte.

- Si la lettre devinée n'est pas dans le mot, le joueur perd un essai.

- Le jeu continue jusqu'à ce que le joueur devine le mot ou épuise tous ses essais.

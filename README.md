<<<<<<< HEAD

=======
Projet 1

Fonctionnalités

- Longueur personnalisée : L'utilisateur définit la longueur du mot de passe.

- Inclusion personnalisée de caractères : L'utilisateur peut choisir d'inclure des lettres majuscules, des chiffres et des symboles, et préciser combien de chaque type seront inclus.

- Remplissage automatique en minuscules : Si la longueur n'est pas entièrement remplie par les types sélectionnés, les caractères restants seront des lettres minuscules.

- Gestion des erreurs : Si le total des caractères sélectionnés dépasse la longueur choisie, une alerte est affichée et la génération est relancée.

Fonctionnement

1.Demande de la longueur : L'utilisateur saisit la longueur souhaitée du mot de passe.

2.Choix des types de caractères : L'utilisateur peut choisir d'inclure des majuscules, chiffres et symboles, et spécifie combien de chaque type doit être utilisé.

3.Vérification de validité : Si la somme des majuscules, chiffres et symboles dépasse la longueur spécifiée, une alerte apparaît et l'utilisateur doit recommencer. 4.Génération du mot de passe : -Les lettres majuscules, chiffres et symboles sont ajoutés selon les quantités choisies. -Les caractères restants sont remplis avec des lettres minuscules aléatoires.

5.Affichage : Le mot de passe généré est affiché dans une boîte de dialogue ou dans la console.

PROJET 2

PROJET 3

Ce projet simule une fille d'attente où des clients prioritaires ou non sont gérés

Le programme comporte différentes fonctionnalités :

- Ajout de clients dans la file avec un statut prioritaire ou non

- Les clients prioritaires sont insérés avant les clients qui ne le sont pas

- Possibilité de suppression de client de la file d'attente par l'utilisation du numéro de ticket

- Affichage de la file avec les détails de chaque client


Utilisation

L'utilisation se fait à l'aide des méthodes du programme. Par exemple :

file_client.ajout_client(false/true); pour l'ajout d'un client prioritaire ou non

file_client.supprimer_client(2); pour supprimer le client ayant le ticket numéro 2 de la file d'attente



PROJET 4

PROJET 5

Ce projet simule un jeu de l'oie dans lequel :

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

L'utilisateur défini le nombre de case du jeu en l'écrivant lui même dans le programme. Il défini aussi les différents joueurs en écrivant leur nom.


PROJET 6

Fonctionnalités

1.Affichage du mot : Le mot à deviner est initialement caché et affiché sous forme de tirets (_).

2.Saisie utilisateur : Le joueur entre une lettre à la fois pour deviner le mot caché.

3.Gestion des erreurs : Si la lettre proposée est incorrecte, le nombre d'erreurs augmente. Le jeu permet un nombre limité d'erreurs.

4.Victoire ou défaite : Si le joueur devine l'ensemble du mot avant d'épuiser ses essais, il gagne. Sinon, un message de défaite est affiché.

Compétences couvertes
- Manipulation de chaînes de caractères et de tableaux : Gestion de l'affichage du mot caché et mise à jour lorsque des lettres sont devinées.

- Conditions et boucles : Utilisation de boucles for pour vérifier les lettres devinées et de boucles while pour continuer le jeu jusqu'à la victoire ou la défaite.

- Gestion des erreurs : Limitation du nombre d'essais incorrects et gestion des saisies du joueur.

Comment jouer

1.Un mot est sélectionné aléatoirement à partir d'une liste de mots.

2.Le mot est affiché sous forme de tirets représentant chaque lettre.

3.Le joueur devine une lettre à la fois.

4.Si la lettre devinée fait partie du mot, elle est révélée dans sa position correcte.

5.Si la lettre devinée n'est pas dans le mot, le joueur perd un essai.

6.Le jeu continue jusqu'à ce que le joueur devine le mot ou épuise tous ses essais.
>>>>>>> Edwin

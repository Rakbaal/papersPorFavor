import Game from "./classes/game";
import Id from "./classes/id";
import Immigrant from "./classes/immigrant";
import Round from "./classes/round";


/*
 A l'origine, l'idée était de réaliser un jeu du style "papers please"
où le joueur incarne un contrôleur des douanes inspectant l'identité des
personnes passant par son bureau.

Le joueur devait donc pouvoir consulter la carte d'identité de l'immigrant
et poser des questions sur ce dernier pour voir si les informations correspondent.

Si le joueur trouve des incohérences, il doit refuser l'entrée, sinon il doit l'autoriser.

La génération automatique d'immigrants et de cartes d'identité (id) est fonctionnelle, je n'ai juste
finalement pas trouvé comment implémenter l'observer.
En lançant un npm run watch et en resauvegardant, une nouvelle situation sera automatiquement générée
(nouvel immigrant + nouveaux papiers. Les papiers ont une propriété "falsifiés" (forged) elle aussi générée
automatiquement)

J'ai malheureusement du abandonner le projet par manque de temps...
*/
const round:Round = new Round()
const game:Game = new Game()

round.immigrant.display()
console.log(round.immigrant)
console.log(round.id)

/* 
Si la propriété forged est à "true", alors une incohérence entre le nom de l'immigrant et ses papiers devrait apparaître
*/


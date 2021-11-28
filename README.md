# Générateur de tickets de tombola

Ce module propose une numérotation adaptée à un découpage rapide des carnets avec un massicot.

## Explications avec un cas pratique

Pour une classe de 30 élèves, nous souhaitons imprimer des carnets de 10 tickets chacun.
Ce qui donne un total de 300 tickets, répartis sur 60 pages. ( 5 tickets par page A4 ).
Une fois les planches de tickets imprimées ( Plus d'explications dans le module )
Il faudra :
- prendre les pages par tas de 10
- agrafer les carnets
- découper au massicot en suivant les pointillets

Chaque carnet aura des numeros qui se suivent, pour cela l'algo de ce module répartit la numérotation des tickets suivant la logique suivante:
**Page 1: **
\#1, #11, #21, #31, #41
**Page 2: **
\#2, #12, #22, #32, #42
...
**Page 55 ( par exemple): **
\#255, #265, #275, #285, #295

Ce n'est pas une simple numerotation de 10 en 10 que l'on aurait pu obtenir avec un publipostage.
Ici, l'algo calcule une répartition sans doublon et propose de personnaliser facilement les textes du ticket

## Personnalisation

Ce module est proposé sous une forme modifiable, à savoir:
- 1 fichier generator.html => le générateur lui même embarquant le code javascript inline contenant l'algo de répartition
- 1 fichier style.scss à compiler => style.min.css
- 1 fichier image.png ( c'est l'image d'illustration du ticket )

L'idée étant de faciliter la personnalisation à un autre dev/bidouilleur.

## Utilisation rapide

Pour chaque modification je publie une version utilisable en l'état, dans ce cas il faut télécharger le dossier "dist" contenant:
- 1 fichier generator.html ( contenant le module, les styles et le code javascript inliné )
- 1 fichier image.png ( à modifier pour personnaliser l'image du ticket )

L'utilisation du module présent dans le dossier dist est préconisé pour ceux qui ne sont pas à l'aise avec la technique, ou qui souhaitent tester l'outil rapidement.

## Bon à savoir

Ce module donne de meilleurs résultats sous Chrome que sous Firefox ( la preview est plus fidèle sous Chrome ).
Je ne saurais que trop vous conseiller de générer les tickets avec une imprimante virtuelle PDF, sans marge, sur un format A4 portrait et avec la case "afficher les éléments d'arrière-plans" cochée. ( souvent cachée dans les paramètres avancés ).

## LICENCE

Aucune. Gratuit, free.

## Contact

Contactez moi si vous le souhaitez, denis.bugeja@gmail.com
Je ne personnaliserai pas ce module sur commande mais si vous souhaitez échanger, proposer un coup de main, poser une question, vous pouvez le faire, précisez bien le sujet ;-).
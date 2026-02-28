Point de Contrôle – Algorithmes avec Tableaux et Produit Scalaire
Votre Objectif

Pour ce point de contrôle, il vous est demandé d'écrire un algorithme qui réponde à la description suivante :

Description
Problème 1 – Somme des éléments distincts

Étant donné deux ensembles d'éléments, trouvez la somme de tous les éléments distincts.
Autrement dit, calculez la somme des éléments qui sont présents dans l’un ou l’autre des ensembles mais pas dans les deux.

Exemple :

Ensemble 1 : [3, 1, 7, 9]

Ensemble 2 : [2, 4, 1, 9, 3]

Résultat : 13 (éléments distincts : 2, 4, 7)

Consigne :

Donner une solution utilisant des tableaux.

Problème 2 – Produit scalaire et orthogonalité

Nom : Produit en points

Description :

Écrire une procédure dot_product qui calcule le produit scalaire de deux vecteurs v1 et v2 et stocke le résultat dans une variable ps.

Écrire un algorithme qui détermine, pour n couples de vecteurs, si les vecteurs sont orthogonaux (leur produit scalaire est nul) en appelant la procédure.

Modifier l’algorithme pour utiliser une fonction dot_product qui retourne directement le produit scalaire, si souhaité.

Instructions pour la résolution
Problème 1

Solution avec un tableau.

Étapes :

Initialiser somme = 0.

Parcourir chaque élément du premier ensemble et vérifier s’il n’est pas présent dans le deuxième ensemble ; si oui, l’ajouter à somme.

Faire la même opération pour chaque élément du deuxième ensemble.

Problème 2

Lors de la création de votre algorithme :

Utiliser un tableau pour représenter les vecteurs.

Utiliser des boucles imbriquées si nécessaire.

Expérimenter différents types de passage de paramètres :

Passage par valeur

Passage par référence (ou VAR)

Conseil :

La procédure dot_product doit pouvoir être appelée plusieurs fois pour différents couples de vecteurs.

Vérifier l’orthogonalité après chaque calcul du produit scalaire.
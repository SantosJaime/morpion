'use strict';

import {Board} from './board';

new Board(document.querySelector('#morpion'));

// saisie du nom des joueurs par l'utilisateur
function choixNomJoueur() {
    let nom1 = prompt("Veuillez entrer le nom du joueur 1 :");
    if (nom1 != null) {
      document.getElementById("nomJoueur1").innerHTML =
      "Joueur 1 : " + nom1 + " (X)";
    }
    
    let nom2 = prompt("Veuillez entrer le nom du joueur 2 :");
    if (nom2 != null) {
      document.getElementById("nomJoueur2").innerHTML =
      "Joueur 2 : " + nom2 + " (O)";
    }
  }

  choixNomJoueur();

  function onClickNew(){
    return document.location.reload();
}


import {Game, PLAYER1, PLAYER2} from './game';

window.Game = Game ;
window.PLAYER1 = PLAYER1 ;
window.PLAYER2 = PLAYER2 ;




// stocker le bouton nouvelle partie
let btnNouveau = document.getElementById('newGame');
// stocker le bouton recommencer une manche
let btnRecommencer = document.getElementById('recommencer');
// récupérer affichage nom tour joueur
let tourJoueur = document.getElementById('tourJoueur');

// ajout des écouteurs sur les boutons
//nouvelle partie
btnNouveau.addEventListener('click', onClickNew);
//btnRecommencer.addEventListener('click', onClickRecommencer);
//btnReinitialiser.addEventListener('click', onClickReinitialiser);

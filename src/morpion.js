'use strict';

import {Board} from './board';

new Board(document.querySelector('#morpion'));

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

// ajout des écouteurs sur le bouton nouvelle partie
btnNouveau.addEventListener('click', onClickNew);
//btnRecommencer.addEventListener('click', onClickRecommencer);
//btnReinitialiser.addEventListener('click', onClickReinitialiser);

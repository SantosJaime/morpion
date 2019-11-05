import {Game, PLAYER1} from './game';

/**
* Interface graphique pour le jeu de morpion
*/
export class Board {
    /**
    * Affiche un plateau de jeu interactif dans l’élément spécifié.
    *
    * @param root Élément racine
    */
    constructor(root) {
        this.root = root;

        const board = document.createElement('div');
        board.classList.add('board');
        this.root.appendChild(board);

        // On crée un `div` qui représente la grille de jeu et qui contiendra les cases
        const grid = document.createElement('div');
        grid.classList.add('grid');
        board.appendChild(grid);

        // On crée les cases et les ajoutes à la grille
        this.cells = [];
        for (let i = 0 ; i < 9 ; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            const symbol = document.createElement('div');
            symbol.classList.add('symbol');
            cell.appendChild(symbol);

            this.cells.push(cell);
            grid.appendChild(cell);
        }

        this.morpion = new Game();
    
            for (let index of this.cells.keys()) {
                this.cells[index].onclick =() => this.onClickCell(index);
            }                
    }

    /**
    * Gère les cliques des joueurs sur les cases.
    *
    * @param index
    Indice de la case cliquée
    */
    onClickCell(index) {
        const cell = this.cells[index];

        // Si le coup n’est pas possible, on quitte la fonction sans rien faire de plus.
        if ( !this.morpion.move(index)) {
            return;
        }

        // On indique que le joueur courant à jouer un coup dans la case cliquée
        // en ajoutant la classe CSS adéquate.
        if (this.morpion.currentPlayer === PLAYER1) {
            cell.classList.add('player1');
        } else {
            cell.classList.add('player2');
        }

        let winPattern = this.morpion.checkWin();
        if ( !winPattern) {
            // On indique que c’est l’autre joueur qui joue à présent.
            this.morpion.switchPlayer();
        } else {
            this.morpion.terminate() ;
            this.highlight(winPattern);
        }
    }

    /**
    * Met en évidence les cases indiquées.
    *
    * @param indexes
    Liste des cases à mettre en évidence
    */
    highlight(indexes) {
        for (let index of indexes) {
            this.cells[index].classList.add('win');
        }
    }
}
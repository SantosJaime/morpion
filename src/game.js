export const PLAYER1 = Symbol('player 1');
export const PLAYER2 = Symbol('player 2');

/**
 * Représente une partie de Morpion
 */

/**
*
Liste des alignements de coups gagnants possibles.
*/
const WIN_PATTERNS = [
    [0, 1, 2], // Ligne 0
    [3, 4, 5], // Ligne 1
    [6, 7, 8], // Ligne 2
    [0, 3, 6], // Colonne 0
    [1, 4, 7], // Colonne 1
    [2, 5, 8], // Colonne 2
    [0, 4, 8], // Diagonale ↘
    [2, 4, 6]  // Diagonale ↙
    ] ;

export class Game {
    /**
    * Crée une nouvelle partie.
    */
    constructor() {
        this.board = Array(9).fill(null) ;
        this.currentPlayer = PLAYER1 ;
        this.movesCount = 0 ;
    }
    
/**
* Tente de jouer le coup indiqué pour le joueur courant.
*
* Retourne `true` si le coup a pu être joué. Sinon, retourne `false`.
*
* @param cell Le numéro de la case où jouer le coup.
* @returns {boolean} La réussite ou l’échec du coup.
*/
    move(cell) {
        // Si le joueur est `null` ou si la case n’est pas `null
        // le coup ne peut pas être joué
        if (this.currentPlayer === null || this.board[cell] !== null ) {
            // On retourne `false` et on ne fait rien d'autre.
            return false ;
        }
        
        this.movesCount++ ;
        this.board[cell] = this.currentPlayer ;
        return true ;
    }

   /**
    * Vérifie si le joueur courant a réaliser une condition de victoire.
    *
    * En cas de victoire, retourne la liste des cases gagnantes.
    * Sinon retourne `false`.
    *
    * @returns {boolean|array}
    Coup gagnant, sinon `false`.
    */
    checkWin() {
        for (let pattern of WIN_PATTERNS) {
            let match = true ;

            for (let cell of pattern) {
                if (this.board[cell] !== this.currentPlayer) {
                    match = false ;
                    break ;
                }
            }
            if (match) { 
                return pattern ;
            }
        }
        return false ;
    }
 
    /**
    * Marque la partie comme terminée.
    */
    terminate() {
        this.currentPlayer = null ;
        
        }
        /**
        * Vérifie si la partie a été marquée comme terminée.
        */
        isTerminated() {
            return this.currentPlayer === null ;
        }

    /**
    * Change le joueur courant.
    *
    * Marque la fin de partie si le nombre de coups maximum est atteint.
    */
    switchPlayer() {
        if (this.movesCount === 9) {
            this.terminate() ;
            
            return ;
        }

        switch (this.currentPlayer) {
            case PLAYER1 :
                this.currentPlayer = PLAYER2 ;
                break ;

            case PLAYER2 :
                this.currentPlayer = PLAYER1 ;
                break ;

            case null :
                break ;
        }
    }


}


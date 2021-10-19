import { Player } from "../player";

export abstract class Piece {
    readonly owner: Player;
    public inPlay: boolean;
    
    constructor(owner: Player) {
        this.owner = owner;
        this.inPlay = false;
    }
    
    // Add a function to sum victory points
}
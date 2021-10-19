import { Piece } from "./piece";
import { Player } from "../player";

export class City extends Piece {
    private static nextId: bigint = 1n;

    readonly id: bigint;

    constructor(owner: Player) {
        super(owner);
        this.id = this._setCityId();
    }

    private _setCityId(): bigint {
        if (City.nextId > 16n) {
            throw new Error("You can't create more than 16 cities");
        }
        return City.nextId++;
    }
}
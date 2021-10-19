import { Piece } from "./piece";
import { Player } from "../player";

export class Road extends Piece {
    private static nextId: bigint = 1n;

    readonly id: bigint;

    constructor(owner: Player) {
        super(owner);
        this.id = this._setRoadId();
    }

    private _setRoadId(): bigint {
        if (Road.nextId > 60n) {
            throw new Error("You can't create more than 60 Roads");
        }
        return Road.nextId++;
    }
}
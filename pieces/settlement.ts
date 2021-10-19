import { Piece } from "./piece";
import { Player } from "../player"

export class Settlement extends Piece {
    private static nextId: bigint = 1n;

    readonly id: bigint;

    constructor(owner: Player) {
        super(owner);
        this.id = this._setSettlementId();
    }

    private _setSettlementId(): bigint {
        if (Settlement.nextId > 20n) {
            throw new Error("You can't create more than 20 settlements");
        }
        return Settlement.nextId++;
    }
}
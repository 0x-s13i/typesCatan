"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settlement = void 0;
const piece_1 = require("./piece");
class Settlement extends piece_1.Piece {
    constructor(owner) {
        super(owner);
        this.id = this._setSettlementId();
    }
    _setSettlementId() {
        if (Settlement.nextId > 20n) {
            throw new Error("You can't create more than 20 settlements");
        }
        return Settlement.nextId++;
    }
}
exports.Settlement = Settlement;
Settlement.nextId = 1n;

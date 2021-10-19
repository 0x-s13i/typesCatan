"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Road = void 0;
const piece_1 = require("./piece");
class Road extends piece_1.Piece {
    constructor(owner) {
        super(owner);
        this.id = this._setRoadId();
    }
    _setRoadId() {
        if (Road.nextId > 60n) {
            throw new Error("You can't create more than 60 Roads");
        }
        return Road.nextId++;
    }
}
exports.Road = Road;
Road.nextId = 1n;

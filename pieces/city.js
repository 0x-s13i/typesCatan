"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.City = void 0;
const piece_1 = require("./piece");
class City extends piece_1.Piece {
    constructor(owner) {
        super(owner);
        this.id = this._setCityId();
    }
    _setCityId() {
        if (City.nextId > 16n) {
            throw new Error("You can't create more than 16 cities");
        }
        return City.nextId++;
    }
}
exports.City = City;
City.nextId = 1n;

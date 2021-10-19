"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Terrain = void 0;
const resourceProductionRules = {
    "Hills": "Brick",
    "Forest": "Lumber",
    "Mountains": "Ore",
    "Fields": "Grain",
    "Pasture": "Wool",
    "Desert": "Nothing",
};
class Terrain {
    constructor(terrain) {
        this.terrain = terrain;
        this.resource = resourceProductionRules[terrain];
    }
}
exports.Terrain = Terrain;

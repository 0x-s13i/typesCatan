export type TerrainType = "Hills" | "Forest" | "Mountains" | "Fields" | "Pasture" | "Desert"
export type ResourceType = "Brick" | "Lumber" | "Ore" | "Grain" | "Wool" | "Nothing"

type ResourceProduction = {
    [T in TerrainType]: ResourceType;
}

const resourceProductionRules: ResourceProduction = {
    "Hills": "Brick",
    "Forest": "Lumber",
    "Mountains": "Ore",
    "Fields": "Grain",
    "Pasture": "Wool",
    "Desert": "Nothing",
}

export class Terrain {

    readonly terrain: TerrainType;
    readonly resource: ResourceType;

    constructor(terrain: TerrainType) {
        this.terrain = terrain;
        this.resource = resourceProductionRules[terrain];
    }
}
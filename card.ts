type CardType = "Resource" | "Development" | "Special"
type ResourceCardSubtype = "Brick" | "Grain" | "Lumber" | "Ore" | "Wool"
type DevelopmentCardSubtype = "Knight" | "Progress" | "VictoryPoint"
type SpecialCardSubtype = "LongestRoad" | "LargestArmy"
type Subtype = ResourceCardSubtype | DevelopmentCardSubtype | SpecialCardSubtype

export abstract class Card {

    readonly type: CardType;
    readonly subtype: Subtype;

    constructor(type: CardType, subtype: Subtype) {
        this.type = type;
        this.subtype = subtype;
    }

}

export class ResourceCard extends Card {

    constructor(subtype: ResourceCardSubtype) {
        super("Resource", subtype);
    }

}

export class DevelopmentCard extends Card {

    readonly victoryPoints: bigint;

    constructor(subtype: DevelopmentCardSubtype) {
        super("Development", subtype);
        this.victoryPoints = this._setVictoryPoints(subtype);
    }

    private _setVictoryPoints(cardSubType: DevelopmentCardSubtype): bigint {
        return cardSubType == "VictoryPoint" ? 1n : 0n;
    }

}

export class SpecialCard extends Card {

    readonly victoryPoints: bigint;

    constructor(subtype: SpecialCardSubtype) {
        super("Special", subtype);
        this.victoryPoints = 2n;
    }

}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialCard = exports.DevelopmentCard = exports.ResourceCard = exports.Card = void 0;
class Card {
    constructor(type, subtype) {
        this.type = type;
        this.subtype = subtype;
    }
}
exports.Card = Card;
class ResourceCard extends Card {
    constructor(subtype) {
        super("Resource", subtype);
    }
}
exports.ResourceCard = ResourceCard;
class DevelopmentCard extends Card {
    constructor(subtype) {
        super("Development", subtype);
        this.victoryPoints = this._setVictoryPoints(subtype);
    }
    _setVictoryPoints(cardSubType) {
        return cardSubType == "VictoryPoint" ? 1n : 0n;
    }
}
exports.DevelopmentCard = DevelopmentCard;
class SpecialCard extends Card {
    constructor(subtype) {
        super("Special", subtype);
        this.victoryPoints = 2n;
    }
}
exports.SpecialCard = SpecialCard;

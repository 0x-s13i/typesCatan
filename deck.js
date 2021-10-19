"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
const card_1 = require("./card");
class Deck {
    constructor() {
        this.deck = [];
    }
    addCardToDeck(card) {
        this.deck.push(card);
    }
    drawCardFromDeck(card) {
        const t = card.type;
        const st = card.subtype;
        let iter = 0;
        for (const c of this.deck) {
            if (c.type == t && c.subtype == st) {
                this.deck.splice(iter, 1);
                break;
            }
            iter += 1;
        }
    }
    sumVictoryPoints() {
        let sumCounter = 0n;
        for (const card of this.deck) {
            if (card instanceof card_1.DevelopmentCard ||
                card instanceof card_1.SpecialCard) {
                sumCounter += card.victoryPoints;
            }
        }
        return sumCounter;
    }
}
exports.Deck = Deck;

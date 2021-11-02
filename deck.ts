import { Card, DevelopmentCard, SpecialCard } from "./card"

type DeckOfCards = Card[];

export class Deck {
    readonly cards: DeckOfCards;

    constructor() {
        this.cards = [];
    }

    addCardToDeck(card: Card) {
        this.cards.push(card);
    }

    drawCardFromDeck(card: Card) {
        const t = card.type;
        const st = card.subtype;
        let iter = 0;
        for (const c of this.cards) {
            if (c.type == t && c.subtype == st) {
                this.cards.splice(iter, 1);
                break;
            }
            iter += 1;
        }
    }

    sumVictoryPoints(): bigint {
        let sumCounter = 0n;
        for (const card of this.cards) {
            if (card instanceof DevelopmentCard ||
                card instanceof SpecialCard) {
                sumCounter += card.victoryPoints;
            }
        }
        return sumCounter;
    }

}

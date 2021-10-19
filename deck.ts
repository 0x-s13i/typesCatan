import { Card, DevelopmentCard, SpecialCard } from "./card"

type DeckOfCards = Card[];

export class Deck {
    private readonly deck: DeckOfCards;

    constructor() {
        this.deck = [];
    }

    addCardToDeck(card: Card) {
        this.deck.push(card);
    }

    drawCardFromDeck(card: Card) {
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

    sumVictoryPoints(): bigint {
        let sumCounter = 0n;
        for (const card of this.deck) {
            if (card instanceof DevelopmentCard ||
                card instanceof SpecialCard) {
                sumCounter += card.victoryPoints;
            }
        }
        return sumCounter;
    }

}

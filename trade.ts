import { ResourceCard, ResourceCardSubtype } from "./card";
import { Player } from "./player";

type State = "incomplete" | "readyToTrade" | "complete" | "cancelled";

export class Trade {
    private static nextId: bigint = 1n;

    readonly id: bigint;
    readonly tradingPlayer: Player;
    public cardsToTrade: ResourceCard[];
    public cardsWanted: ResourceCardSubtype[];
    private state: State = "incomplete";

    constructor(tradingPlayer: Player) {
        this.id = Trade.nextId++;
        this.tradingPlayer = tradingPlayer;
        this.cardsToTrade = [];
        this.cardsWanted = [];
    }

    addCardToTrade(cardToAddToTrade: ResourceCard) {
        this.cardsToTrade.push(cardToAddToTrade);
        const cardindex = this.tradingPlayer.deck.cards.indexOf(cardToAddToTrade, 0);
        this.tradingPlayer.deck.cards.splice(cardindex, 1);
    }

    addCardWanted(cardWanted: ResourceCardSubtype) {
        this.cardsWanted.push(cardWanted);
    }

    offer() {
        if (this.cardsToTrade.length > 0 && this.cardsWanted.length > 0) {
            this.state = "readyToTrade";
        }
        else {
            throw new Error("You need to add cards to trade and cards wanted");
        }
    }

    private _checkCardsExist(player: Player, cardSubtype: ResourceCardSubtype): boolean {
        for (const card of player.deck.cards) {
            if (card.subtype == cardSubtype) {
                return true;
            }
        }
        return false;
    }

    // accept tade
    accept(tradingPartner: Player) {
        for (const cardSubtype of this.cardsWanted) {
            let doesCardExist = this._checkCardsExist(tradingPartner, cardSubtype);
            if (!doesCardExist) {
                throw Error("You can't accept the trade as you don't have that card in your deck")
            }
        }

        for (const cardWantedSubtype of this.cardsWanted) {
            for (const card of tradingPartner.deck.cards) {
                if (card.subtype == cardWantedSubtype) {
                    // remove card from deck
                    const cardIndex = tradingPartner.deck.cards.indexOf(card, 0);
                    tradingPartner.deck.cards.splice(cardIndex, 1);
                    // give card to trading player
                    this.tradingPlayer.deck.cards.push(card);
                    break;
                }
            }
        }

        for (const card of this.cardsToTrade) {
            // give cards to trading partner
            tradingPartner.deck.cards.push(card);
        }

        this.state = "complete"

    }

    viewTradeOffer() {
        console.log("Cards Given Away");
        console.log(this.cardsToTrade);
        console.log("Cards Wanted");
        console.log(this.cardsWanted);
    }

    // cancel trade
    cancelTrade() {
        throw new Error("Not Implemented Error")
    }

    // edit trade
    editTrade() {
        throw new Error("Not Implemented Error")
    }
}
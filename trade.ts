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

    viewTradeOffer() {
        console.log("Cards Given Away");
        console.log(this.cardsToTrade);
        console.log("Cards Wanted");
        console.log(this.cardsWanted);
    }

    // cancel trade

    // accept tade

    // edit trade

    // view trade

    // accept trade

}
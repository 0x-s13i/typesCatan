import { Deck } from "./deck"
import { City } from "./pieces/city";
import { Road } from "./pieces/road";
import { Settlement } from "./pieces/settlement";

export type Colour = "Red" | "Orange" | "Blue" | "Green"

export class Player {
    private static players: string[] = [];
    private static colours: Colour[] = [];
    private static nextId: bigint = 1n;

    // TODO -> These shouldn't be public...
    // Need to move into a class
    public settlements: Settlement[];
    public cities: City[];
    public roads: Road[];
    public victoryPoints: bigint;
    
    readonly username: string;
    readonly colour: Colour;
    readonly id: bigint;
    readonly deck: Deck;

    constructor(username: string, colour: Colour) {
        this.username = this._setUsername(username);
        this.colour = this._setColour(colour);
        this.id = this._setPlayerId();
        this.deck = this._createDeck();
        this.settlements = [];
        this.cities = [];
        this.roads = [];
        this.victoryPoints = 0n;
    }

    private _setUsername(username: string): string {
        if (Player.players.includes(username)) {
            throw new Error(`Username ${username} already exist`);
        }
        Player.players.push(username);
        return username;
    }

    private _setColour(colour: Colour): Colour {
        if (Player.colours.includes(colour)) {
            throw new Error(`${colour} has already been picked.`);
        }
        Player.colours.push(colour);
        return colour;
    }

    private _setPlayerId(): bigint {
        return Player.nextId++;
    }

    private _createDeck(): Deck {
        const deckOfCards = new Deck;
        return deckOfCards;
    }

}

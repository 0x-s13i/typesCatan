"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const deck_1 = require("./deck");
class Player {
    // TODO -> How to work out victory points for each player?
    constructor(username, colour) {
        this.username = this._setUsername(username);
        this.colour = this._setColour(colour);
        this.id = this._setPlayerId();
        this.deck = this._createDeck();
        this.settlements = [];
        this.cities = [];
        this.roads = [];
    }
    _setUsername(username) {
        if (Player.players.includes(username)) {
            throw new Error(`Username ${username} already exist`);
        }
        Player.players.push(username);
        return username;
    }
    _setColour(colour) {
        if (Player.colours.includes(colour)) {
            throw new Error(`${colour} has already been picked.`);
        }
        Player.colours.push(colour);
        return colour;
    }
    _setPlayerId() {
        if (Player.nextId > 4n) {
            throw new Error("Can't have more than 4 players");
        }
        return Player.nextId++;
    }
    _createDeck() {
        const deckOfCards = new deck_1.Deck;
        return deckOfCards;
    }
}
exports.Player = Player;
Player.players = [];
Player.colours = [];
Player.nextId = 1n;

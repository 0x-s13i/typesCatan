"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const city_1 = require("./pieces/city");
const road_1 = require("./pieces/road");
const settlement_1 = require("./pieces/settlement");
const player_1 = require("./player");
const tile_1 = require("./tile");
class Game {
    constructor() {
        this.players = [];
        this.tiles = [];
    }
    addPlayers(playerName, playerColour) {
        const newPlayer = new player_1.Player(playerName, playerColour);
        this.players.push(newPlayer);
        return newPlayer;
    }
    addCardToDeck(playerName, card) {
        for (const player of this.players) {
            if (player.username == playerName) {
                player.deck.addCardToDeck(card);
            }
        }
    }
    createTile(terrain, tileNumber) {
        const newTile = new tile_1.Tile(terrain, tileNumber);
        this.tiles.push(newTile);
        return newTile;
    }
    createRoad(owner) {
        const newRoad = new road_1.Road(owner);
        return newRoad;
    }
    createSettlement(owner) {
        const newSettlement = new settlement_1.Settlement(owner);
        return newSettlement;
    }
    createCity(owner) {
        const newCity = new city_1.City(owner);
        return newCity;
    }
}
// Create an instance of the game
const g = new Game;
// Create the players
const player1 = g.addPlayers("Sam", "Red");
const player2 = g.addPlayers("Matt", "Blue");
const player3 = g.addPlayers("Jayyyyyy", "Orange");
const player4 = g.addPlayers("Wattage", "Green");
// Set up the board (Below is standard setup)
const tile1 = g.createTile("Mountains", 10n);
const tile2 = g.createTile("Pasture", 2n);
const tile3 = g.createTile("Forest", 9n);
const tile4 = g.createTile("Fields", 12n);
const tile5 = g.createTile("Hills", 6n);
const tile6 = g.createTile("Pasture", 4n);
const tile7 = g.createTile("Hills", 10n);
const tile8 = g.createTile("Fields", 9n);
const tile9 = g.createTile("Forest", 11n);
const tile10 = g.createTile("Desert", 0n);
const tile11 = g.createTile("Forest", 3n);
const tile12 = g.createTile("Mountains", 8n);
const tile13 = g.createTile("Forest", 8n);
const tile14 = g.createTile("Mountains", 3n);
const tile15 = g.createTile("Fields", 4n);
const tile16 = g.createTile("Pasture", 5n);
const tile17 = g.createTile("Hills", 5n);
const tile18 = g.createTile("Fields", 6n);
const tile19 = g.createTile("Pasture", 11n);
// Give the players their pieces
for (let i = 0; i < 5; i++) {
    for (const player of g.players) {
        player.settlements[i] = g.createSettlement(player);
    }
}
for (let i = 0; i < 4; i++) {
    for (const player of g.players) {
        player.cities[i] = g.createCity(player);
    }
}
for (let i = 0; i < 15; i++) {
    for (const player of g.players) {
        player.roads[i] = g.createRoad(player);
    }
}
// Players put their pieces down on the board
tile1.addRoadToTile(player1.roads[0]);
tile1.addSettlementToTile(player1.settlements[0]);
tile3.addRoadToTile(player2.roads[0]);
tile3.addSettlementToTile(player2.settlements[0]);
tile4.addRoadToTile(player3.roads[0]);
tile4.addSettlementToTile(player3.settlements[0]);
tile13.addRoadToTile(player4.roads[0]);
tile13.addSettlementToTile(player4.settlements[0]);
// roll dice
// award cards
// trade
// build
console.log(g);

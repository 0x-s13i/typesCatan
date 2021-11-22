import { Game } from "./game"

/// Create an instance of the game
const g = new Game(4n);

// Create the players
const player1 = g.addPlayer("Sam", "Red");
const player2 = g.addPlayer("Matt", "Blue");
const player3 = g.addPlayer("Jayyyyyy", "Orange");
const player4 = g.addPlayer("Wattage", "Green");

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

// Players put their first pieces down on the board
tile1.addRoadToTile(player1.roads[0]!);
tile1.addSettlementToTile(player1.settlements[0]!);

tile3.addRoadToTile(player2.roads[0]!);
tile3.addSettlementToTile(player2.settlements[0]!);

tile4.addRoadToTile(player3.roads[0]!);
tile4.addSettlementToTile(player3.settlements[0]!);

tile13.addRoadToTile(player4.roads[0]!);
tile13.addSettlementToTile(player4.settlements[0]!);

// Players put their second pieces down on the board
tile8.addRoadToTile(player1.roads[1]!);
tile8.addSettlementToTile(player1.settlements[1]!);

tile14.addRoadToTile(player2.roads[1]!);
tile14.addSettlementToTile(player2.settlements[1]!);

tile11.addRoadToTile(player3.roads[1]!);
tile11.addSettlementToTile(player3.settlements[1]!);

tile15.addRoadToTile(player4.roads[1]!);
tile15.addSettlementToTile(player4.settlements[1]!);

// TODO -> Remove the loop
// Putting this in to simulate multiple rounds for testing trading functionality
for (let i = 0; i < 10; i++) {
    // roll dice
    let token = g.rollDice();
    
    // award cards
    let tilesToAward = g.tilesWithToken(token);
    g.awardOwnersResourceCards(tilesToAward);    
}

// TODO -> Also remove this whole block
// This just shows the players cards
for (const player of g.players) {
    console.log(player.username);
    console.log(player.deck);
}

// trade
let trade1 = g.createATrade(player1);
trade1.addCardToTrade(player1.deck.cards[0]!);

trade1.addCardWanted("Lumber");

trade1.viewTradeOffer();

trade1.accept(player2);

// TODO -> Also remove this whole block
// This just shows the players cards after trading
for (const player of g.players) {
    console.log(player.username);
    console.log(player.deck);
}

// build

// Add up player scores

// console.log(g);

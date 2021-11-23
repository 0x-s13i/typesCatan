import { Card, ResourceCard, DevelopmentCard, SpecialCard, ResourceCardSubtype} from "./card";
import { City } from "./pieces/city";
import { Road } from "./pieces/road";
import { Settlement } from "./pieces/settlement";
import { Colour, Player } from "./player";
import { TerrainType } from "./terrain";
import { Tile } from "./tile";
import { Dice } from "./dice";
import { Trade } from "./trade";

type NumberOfPlayers = 1n | 2n | 3n | 4n

export class Game {

    players: Player[];
    tiles: Tile[];
    diceOne: Dice;
    diceTwo: Dice;
    numOfPlayers: NumberOfPlayers;
    maxNumberOfPlayers: NumberOfPlayers;

    constructor(numOfPlayers: NumberOfPlayers) {
        this.players = [];
        this.tiles = [];
        this.diceOne = new Dice();
        this.diceTwo = new Dice();
        this.numOfPlayers = numOfPlayers;
        this.maxNumberOfPlayers = 4n;
    }

    addPlayer(playerName: string, playerColour: Colour): Player {
        if (BigInt(this.players.length) == this.maxNumberOfPlayers) {
            throw new Error("You can't add more than 4 players to the game");
        }
        else if (BigInt(this.players.length) == this.numOfPlayers) {
            throw new Error(`You already have ${this.players.length} players in the game`);
        }
        else {
            const newPlayer = new Player(playerName, playerColour);
            this.players.push(newPlayer);
            return newPlayer;
        }
    }

    addCardToDeck(playerName: string, card: Card) {
        for (const player of this.players) {
            if (player.username == playerName) {
                player.deck.addCardToDeck(card);
            }
        }
    }

    createTile(terrain: TerrainType, tileNumber: bigint): Tile {
        const newTile = new Tile(terrain, tileNumber);
        this.tiles.push(newTile);
        return newTile;
    }

    createRoad(owner: Player): Road {
        const newRoad = new Road(owner);
        return newRoad;
    }

    createSettlement(owner: Player): Settlement {
        const newSettlement = new Settlement(owner);
        return newSettlement;
    }

    createCity(owner: Player): City {
        const newCity = new City(owner);
        return newCity;
    }

    rollDice(): bigint {
        return this.diceOne.roll() + this.diceTwo.roll();
    }

    tilesWithToken(tokenNumber: bigint): Tile[] {
        let tileArray = [];
        for (const tile of this.tiles) {
            if (tile.tileNumber == tokenNumber) {
                tileArray.push(tile);
            }
        }
        return tileArray;
    }

    awardOwnersResourceCards(tilesWithToken: Tile[]) {
        for (const tile of tilesWithToken) {
            for (const settlement of tile.settlements) {
                let resource = tile.resourceType;
                this.addCardToDeck(
                    settlement.owner.username, 
                    new ResourceCard(resource as ResourceCardSubtype)
                    );
            }
            for (const city of tile.cities) {
                let resource = tile.resourceType;
                this.addCardToDeck(
                    city.owner.username, 
                    new ResourceCard(resource as ResourceCardSubtype)
                    );
            }
        }
    }

    createATrade(player: Player): Trade {
        return new Trade(player);
    }

}

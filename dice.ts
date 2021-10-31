export class Dice {
    roll(): bigint {
        return BigInt(Math.floor(Math.random() * 6) + 1);
    }
}
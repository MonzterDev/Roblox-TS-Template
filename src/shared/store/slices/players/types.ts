import { Currency } from "shared/configs/Currency";

export interface PlayerData {
    balance: PlayerBalance
}

export type PlayerBalance = Record<Currency, number>;

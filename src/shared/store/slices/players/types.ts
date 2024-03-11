import { Currency } from "shared/configs/Currency";
import { Setting } from "shared/configs/Settings";

export interface PlayerData {
    balance: PlayerBalance
    settings: PlayerSettings
}

export type PlayerBalance = Record<Currency, number>;

export type PlayerSettings = Record<Setting, boolean>;

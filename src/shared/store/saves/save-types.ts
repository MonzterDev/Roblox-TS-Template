import { t } from "@rbxts/t";
import { Currency } from "shared/configs/Currency";
import { Setting } from "shared/configs/Settings";

export type CurrencyData = Record<Currency, number>;
export type SettingsData = Record<Setting, boolean>;

export interface PlayerSave {
  health: number;
  currency: CurrencyData;
  settings: SettingsData;
}

export const defaultPlayerSave: PlayerSave = {
  health: 100,
  currency: {
    Coins: 0,
    Gems: 0,
  },
  settings: {
    "Play Music": true,
    "Sound Effects": true,
    PvP: false,
  },
};

// There has to be a better way to handle records
export const playerSaveSchema: t.check<PlayerSave> = t.interface({
  health: t.number,
  currency: t.map(
    t.literal("Coins", "Gems"),
    t.number,
  ) as never as t.check<CurrencyData>,
  settings: t.map(
    t.literal("Play Music", "Sound Effects", "PvP"),
    t.boolean,
  ) as never as t.check<SettingsData>,
});

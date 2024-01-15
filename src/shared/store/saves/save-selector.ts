import { Currency } from "shared/configs/Currency";
import { SharedState } from "..";
import { Setting } from "shared/configs/Settings";

export const selectPlayerSaves = (state: SharedState) => {
	return state.saves;
};

export const selectPlayerSave = (player: string) => {
	return (state: SharedState) => state.saves[player];
};

export const selectPlayerCurrency = (player: string, currency: Currency) => {
	return (state: SharedState) => state.saves[player]?.currency[currency];
};

export const selectPlayerHealth = (player: string) => {
	return (state: SharedState) => state.saves[player]?.health;
};

export const selectPlayerSetting = (player: string, setting: Setting) => {
	return (state: SharedState) => state.saves[player]?.settings[setting];
};

import { Currency } from "shared/configs/Currency";
import { SharedState } from "..";
import { Setting } from "shared/configs/Settings";

export const selectPlayerSaves = (state: SharedState) => {
	return state.saves;
};

export const selectPlayerSave = (id: number) => {
	return (state: SharedState) => state.saves[id];
};

export const selectPlayerCurrency = (id: number, currency: Currency) => {
	return (state: SharedState) => state.saves[id]?.currency[currency];
};

export const selectPlayerHealth = (id: number) => {
	return (state: SharedState) => state.saves[id]?.health;
};

export const selectPlayerSetting = (id: number, setting: Setting) => {
	return (state: SharedState) => state.saves[id]?.settings[setting];
};

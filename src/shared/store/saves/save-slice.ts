import { createProducer } from "@rbxts/reflex";
import { PlayerSave } from "./save-types";
import { mapProperty } from "shared/utils/object-utils";
import { Currency } from "shared/configs/Currency";
import { Setting } from "shared/configs/Settings";

export type SaveState = Readonly<Record<string, PlayerSave | undefined>>;

const initialState: SaveState = {};

export const saveSlice = createProducer(initialState, {
	setPlayerSave: (state, player: string, save: PlayerSave) => ({
		...state,
		[player]: save,
	}),

	deletePlayerSave: (state, player: string) => ({
		...state,
		[player]: undefined,
	}),

	adjustPlayerCurrency: (state, player: string, currency: Currency, amount: number) => {
		return mapProperty(state, player, (save) => ({
			...save,
			currency: {
				...save.currency,
				[currency]: math.max(save.currency[currency] + amount, 0),
			},
		}));
	},
	adjustPlayerHealth: (state, player: string, amount: number) => {
		return mapProperty(state, player, (save) => ({
			...save,
			health: math.max(save.health + amount, 0),
		}));
	},
	adjustPlayerSetting: (state, player: string, setting: Setting, value: boolean) => {
		return mapProperty(state, player, (save) => ({
			...save,
			settings: {
				...save.settings,
				[setting]: value,
			},
		}));
	},
});

import { Action, createReducer } from "@rbxts/rodux";
import { PlayerData } from "shared/types/PlayerData";
import { DEFAULT_PLAYER_DATA } from "shared/constants/PlayerData";

interface UpdateDataAction extends Action<"updatePlayerData"> {
	data: DataState;
}
interface UpdateCurrencyAction extends Action<"updateCurrency"> {
	amount: number;
	currency: ExtractKeys<PlayerData, number>;
}

export type DataState = PlayerData;
export type DataActions = UpdateDataAction | UpdateCurrencyAction;

export const dataReducer = createReducer<DataState, DataActions>(DEFAULT_PLAYER_DATA, {
	updatePlayerData: (state, action) => action.data,
	updateCurrency: (state, action) => {
		state[action.currency] = action.amount;
		return state;
	},
});

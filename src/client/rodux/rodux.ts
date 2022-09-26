import { combineReducers, Store } from "@rbxts/rodux";
import { Functions } from "client/network";
import { PlayerData } from "shared/types/PlayerData";
import { isA } from "shared/util/functions/isA";
import { DataActions, dataReducer, DataState } from "./reducers";

export interface CombinedState {
	data: DataState;
}

const combinedReducer = combineReducers<CombinedState, DataActions>({
	data: dataReducer,
});

export const clientStore = new Store( combinedReducer );

Functions.getAllData.invoke().andThen( ( data ) => {
	if (isA<PlayerData>(data)) clientStore.dispatch({type: "updatePlayerData", data: data})
})
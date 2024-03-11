import { combineProducers } from "@rbxts/reflex";
import { balanceSlice } from "./balance";
import { settingsSlice } from "./settings";

export const playersSlice = combineProducers( {
    balance: balanceSlice,
    settings: settingsSlice
})

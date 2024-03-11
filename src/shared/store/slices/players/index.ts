import { combineProducers } from "@rbxts/reflex";
import { balanceSlice } from "./balance";

export const playersSlice = combineProducers( {
    balance: balanceSlice
})

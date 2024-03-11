import { combineProducers } from "@rbxts/reflex";
import { guiSlice } from "./gui";

export const clientSlice = combineProducers( {
    gui: guiSlice
})

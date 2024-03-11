import { CombineStates } from "@rbxts/reflex";
import { playersSlice } from "./slices/players";

export type SharedState = CombineStates<typeof slices>;

export const slices = {
  players: playersSlice
};

import { CombineStates } from "@rbxts/reflex";
import { saveSlice } from "./saves/save-slice";

export type SharedState = CombineStates<typeof slices>;

export const slices = {
  saves: saveSlice,
};

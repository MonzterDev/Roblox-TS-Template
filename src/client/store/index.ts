import { InferState, combineProducers } from "@rbxts/reflex";
import { slices } from "shared/store";
import { receiverMiddleware } from "./middleware/receiver";

export type RootStore = typeof store;

export type RootState = InferState<RootStore>;

export function createStore() {
	const store = combineProducers({
		...slices,
	});

	store.applyMiddleware(receiverMiddleware());

	return store;
}

export const store = createStore();

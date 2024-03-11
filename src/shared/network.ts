/* eslint-disable no-unused-vars */
import { Networking } from "@flamework/networking";
import { BroadcastAction } from "@rbxts/reflex";
import { PlayerSave } from "./store/saves/save-types";

interface ServerEvents {
	reflex: {
		start: () => void;
	}
}

interface ServerFunctions {}

interface ClientEvents {
	reflex: {
		dispatch: (actions: Array<BroadcastAction>) => void;
		hydrate: (actions: PlayerSave) => void;
		start: () => void;
	}
}

interface ClientFunctions {}

export const GlobalEvents = Networking.createEvent<ServerEvents, ClientEvents>();
export const GlobalFunctions = Networking.createFunction<ServerFunctions, ClientFunctions>();

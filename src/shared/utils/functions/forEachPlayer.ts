import { Players } from "@rbxts/services";

type PlayerReceivingFunction = (player: Player) => unknown;

export function forEachPlayer(joinFunction: PlayerReceivingFunction, leaveFunction?: PlayerReceivingFunction) {
	Players.GetPlayers().forEach(joinFunction);
	Players.PlayerAdded.Connect(joinFunction);
	if (leaveFunction) Players.PlayerRemoving.Connect(leaveFunction);
}

import { Players } from "@rbxts/services";

type PlayerReceivingFunction = (player: Player) => unknown;

export function forEveryPlayer(joinFunc: PlayerReceivingFunction, leaveFunc?: PlayerReceivingFunction) {
	Players.GetPlayers().forEach(joinFunc);
	Players.PlayerAdded.Connect(joinFunc);

	if (leaveFunc) Players.PlayerRemoving.Connect(leaveFunc);
}

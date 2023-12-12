import { Players } from "@rbxts/services";

type PlayerReceivingFunction = (player: Player) => unknown;

export function forEveryPlayer(
	joinFunc: PlayerReceivingFunction,
	leaveFunc?: PlayerReceivingFunction,
): Array<RBXScriptConnection> {
	const events: Array<RBXScriptConnection> = [];

	Players.GetPlayers().forEach(joinFunc);
	events.push(Players.PlayerAdded.Connect(joinFunc));
	if (leaveFunc) events.push(Players.PlayerRemoving.Connect(leaveFunc));

	return events;
}

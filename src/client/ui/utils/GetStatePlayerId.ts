import { Players } from "@rbxts/services";

export function GetStatePlayerId () {
    const player = Players.LocalPlayer;
    return player ? tostring( player.UserId ) : "0";
}

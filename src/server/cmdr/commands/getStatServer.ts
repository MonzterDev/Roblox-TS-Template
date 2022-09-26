import { Dependency } from "@flamework/core";
import { CommandContext } from "@rbxts/cmdr";
import { PlayerDataService } from "server/services/PlayerDataService";
import { PlayerData } from "shared/types/PlayerData";

export = function ( context: CommandContext, player: Player, data: keyof PlayerData ) {
    const playerDataService = Dependency( PlayerDataService )
    const profile = playerDataService.getProfile( player )
    if ( !profile ) return "Profile not found!"
    return profile.data[data]
}
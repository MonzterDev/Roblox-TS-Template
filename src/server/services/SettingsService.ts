import { Service, OnStart } from "@flamework/core";
import { Events } from "server/network";
import { store } from "server/store";
import { Setting } from "shared/configs/Settings";

@Service({})
export class SettingsService implements OnStart {
    onStart() {
        Events.toggleSetting.connect((player, setting) => this.toggleSetting(player, setting));
    }

    private toggleSetting ( player: Player, setting: Setting ) {
        store.toggleSetting( tostring( player.UserId ), setting )
    }
}

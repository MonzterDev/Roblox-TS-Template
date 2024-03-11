import { SETTINGS } from "shared/configs/Settings";
import { PlayerData, PlayerSettings } from "./types";

let settings = {} as PlayerSettings
SETTINGS.forEach( setting => {
    settings[setting] = false
})

export const defaultPlayerData: PlayerData = {
    balance: {
        "Coins": 0,
        "Gems": 0
    },
    settings
}

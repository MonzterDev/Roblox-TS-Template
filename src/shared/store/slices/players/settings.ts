import { createProducer } from "@rbxts/reflex";
import { PlayerData, PlayerSettings } from "./types";

export interface SettingsState {
    readonly [player: string]: PlayerSettings | undefined;
}

const initialState: SettingsState = {};

export const settingsSlice = createProducer( initialState, {
    loadPlayerData: ( state, player: string, data: PlayerData ) => ( {
        ...state,
        [player]: data.settings,
    } ),

    closePlayerData: ( state, player: string ) => ( {
        ...state,
        [player]: undefined,
    } ),

    toggleSetting: ( state, player: string, setting: keyof PlayerSettings ) => ( {
        ...state,
        [player]: {
            ...state[player]!,
            [setting]: !state[player]![setting],
        },
    } )
} );

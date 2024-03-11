import { Currency } from "shared/configs/Currency";
import { SharedState } from "..";
import { createSelector } from "@rbxts/reflex";
import { defaultPlayerData } from "../slices/players/utils";
import { PlayerData } from "../slices/players/types";
import { Setting } from "shared/configs/Settings";

export const selectPlayerBalances = ( playerId: string ) => {
    return ( state: SharedState ) => {
        return state.players.balance[playerId];
    };
}

export const selectPlayerBalance = ( playerId: string, currency: Currency ) => {
    return createSelector(
        selectPlayerBalances( playerId ),
        ( balances ) => {
            return balances && balances[currency];
        },
    );
};

export const selectPlayerSettings = ( playerId: string ) => {
    return ( state: SharedState ) => {
        return state.players.settings[playerId];
    };
}

export const selectPlayerSetting = ( playerId: string, setting: Setting ) => {
    return createSelector(
        selectPlayerSettings( playerId ),
        ( settings ) => {
            return settings && settings[setting];
        },
    );
}

export const selectPlayerData = ( playerId: string ) => {
    return createSelector(
        selectPlayerBalances( playerId ),
        selectPlayerSettings( playerId ),
        ( balances, settings ) => {
            return {
                balance: balances || defaultPlayerData.balance,
                settings: settings || defaultPlayerData.settings,
            } as PlayerData;
        },
    )
}

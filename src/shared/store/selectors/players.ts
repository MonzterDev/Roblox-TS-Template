import { Currency } from "shared/configs/Currency";
import { SharedState } from "..";
import { createSelector } from "@rbxts/reflex";
import { defaultPlayerData } from "../slices/players/utils";
import { PlayerData } from "../slices/players/types";

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

export const selectPlayerData = ( playerId: string ) => {
    return createSelector(
        selectPlayerBalances( playerId ),
        ( balances ) => {
            return balances && {
                balance: balances || defaultPlayerData.balance,
            } as PlayerData;
        },
    )
}

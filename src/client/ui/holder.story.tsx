import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { store } from "client/store";
import { ReflexProvider } from "@rbxts/react-reflex";
import HolderApp from "./apps/holder/holder-app";
import { HOLDER_PAGES } from "shared/configs/Gui";
import { defaultPlayerData } from "shared/store/slices/players/utils";
import { GetStatePlayerId } from "./utils/GetStatePlayerId";

const controls = {}

const Story = {
    summary: "Holder",
    react: React,
    reactRoblox: ReactRoblox,
    story: () => {
        const latestPage = HOLDER_PAGES[HOLDER_PAGES.size() - 1]
        store.loadPlayerData( GetStatePlayerId(), defaultPlayerData )
        store.setHolderPage( latestPage )
        store.toggleSetting( GetStatePlayerId(), "PvP" )

        // store.setHolderPage( "Settings" )

        return (
            <ReflexProvider producer={store}>
                <HolderApp />
            </ReflexProvider>
        )
    },
}

export = Story

import React, { useEffect, useState } from "@rbxts/react";
import Frame from "client/ui/components/frame";
import SettingsApp from "../settings/settings-app";
import { useSelector } from "@rbxts/react-reflex";
import CurrencyApp from "../currency/currency-app";
import { HOLDER_PAGES } from "shared/configs/Gui";
import { store } from "client/store";
import { RunService, StarterGui } from "@rbxts/services";
import { Events } from "client/network";
import { selectHolderPage } from "shared/store/selectors/client";
import ButtonsApp from "../buttons/buttons-app";
import TextButton from "client/ui/components/textButton";

export default function HolderApp () {
	const page = useSelector( selectHolderPage )

	function getApp () {
        if ( page === "Settings" ) {
            return <SettingsApp />
		}
	}

	function cyclePage ( direction: "next" | "previous" ) {
		if ( !page ) return

		const index = HOLDER_PAGES.indexOf( page )
		const nextIndex = ( index + 1 ) % HOLDER_PAGES.size()
		const previousIndex = ( index - 1 + HOLDER_PAGES.size() ) % HOLDER_PAGES.size()

		if ( direction === "next" ) {
			store.setHolderPage( HOLDER_PAGES[nextIndex] )
		} else {
			store.setHolderPage( HOLDER_PAGES[previousIndex] )
		}
	}

	function getCyclePage ( direction: "next" | "previous" ) {
		if ( !page ) return HOLDER_PAGES[0]

        const index = HOLDER_PAGES.indexOf( page )
        const nextIndex = ( index + 1 ) % HOLDER_PAGES.size()
        const previousIndex = ( index - 1 + HOLDER_PAGES.size() ) % HOLDER_PAGES.size()

        if ( direction === "next" ) {
            return HOLDER_PAGES[nextIndex]
        } else {
            return HOLDER_PAGES[previousIndex]
        }
	}
	return (
		<frame
			AnchorPoint={new Vector2( 0.5, 0.5 )}
			Position={new UDim2( 0.5, 0, 0.5, 0 )}
			Size={new UDim2( 1, 0, 1, 0 )}
			BackgroundTransparency={1}
		>
			{getApp()}

			<Frame
				anchorPoint={new Vector2( 1, .5 )}
				position={new UDim2( 1, -10, .5, 0 )}
				size={new UDim2( 0, 265, 0, 65 )}
				backgroundTransparency={1}
				automaticSize={Enum.AutomaticSize.XY}
				uiStrokeSize={0}
			>
				<uilistlayout
					Padding={new UDim( 0, 25 )}
					HorizontalAlignment={Enum.HorizontalAlignment.Center}
					SortOrder={Enum.SortOrder.LayoutOrder}
				/>

				<CurrencyApp />
				<ButtonsApp />


			</Frame>


			{RunService.IsStudio() && !RunService.IsRunMode() && (
				<TextButton
					text={`Next: ${getCyclePage( "next" )}`}
					size={new UDim2( 0, 200, 0, 65 )}
					textSize={24}
					position={new UDim2( 0, 0, 0, 70 )}
					anchorPoint={new Vector2( 0, 0 )}
					onClick={() => cyclePage( "next" )}
				/>
			)}
			{RunService.IsStudio() && !RunService.IsRunMode() && (
				<TextButton
					text={`Previous: ${getCyclePage( "previous" )}`}
					size={new UDim2( 0, 200, 0, 65 )}
					textSize={24}
					position={new UDim2( 0, 0, 0, 0 )}
					anchorPoint={new Vector2( 0, 0 )}
					onClick={() => cyclePage( "previous" )}
				/>
			)}

		</frame>
	)
}

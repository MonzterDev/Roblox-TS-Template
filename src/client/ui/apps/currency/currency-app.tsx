import ScreenGui from "client/ui/components/scaledGui";
import CurrencyFrame from "./components/currency-frame";
import { CURRENCIES } from "shared/configs/Currency";
import { store } from "client/store";
import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import Frame from "client/ui/components/frame";

export default function CurrencyApp () {

	const currencyFrames = CURRENCIES.map( ( currency ) => {
		return <CurrencyFrame currency={currency} />;
	})

	return (
		<Frame
			key="Currency"
			backgroundTransparency={1}
			automaticSize={Enum.AutomaticSize.XY}
			layoutOrder={0}
		>

			{
				currencyFrames
			}

			<uilistlayout Padding={new UDim( 0, 15 )} />
		</Frame>
	);
}

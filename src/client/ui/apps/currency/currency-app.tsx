import ScreenGui from "client/ui/components/scaledGui";
import CurrencyFrame from "./components/currency-frame";
import { CURRENCIES } from "shared/configs/Currency";
import { store } from "client/store";
import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";

export default function CurrencyApp () {

	const currencyFrames = CURRENCIES.map( ( currency ) => {
		return <CurrencyFrame currency={currency} />;
	})

	return (
		<ReflexProvider producer={store}>
			<ScreenGui key="Currencies">
				<frame
					AnchorPoint={new Vector2(1, 0.5)}
					BackgroundTransparency={1}
					Position={new UDim2(1, -10, 0.5, 0)}
					Size={new UDim2(0, 265, 0, 65)}
				>

					{
						currencyFrames
					}

					<uilistlayout
						Padding={new UDim( 0, 15 )}
					/>
				</frame>
			</ScreenGui>
		</ReflexProvider>
	);
}

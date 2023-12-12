import Roact from "@rbxts/roact";
import { withHooksPure } from "@rbxts/roact-hooked";
import ScreenGui from "client/ui/components/scaledGui";
import CurrencyFrame from "./components/currency-frame";
import { CURRENCIES } from "shared/configs/Currency";
import { ReflexProvider } from "@rbxts/roact-reflex";
import { store } from "client/store";

function CurrencyApp() {
	return (
		<ReflexProvider producer={store}>
			<ScreenGui Key="Currencies">
				<frame
					AnchorPoint={new Vector2(1, 0.5)}
					BackgroundTransparency={1}
					Position={new UDim2(1, -10, 0.5, 0)}
					Size={new UDim2(0, 265, 0, 65)}
				>
					{CURRENCIES.map((currency) => {
						return <CurrencyFrame currency={currency} />;
					})}
					<uilistlayout Padding={new UDim(0, 15)} />
				</frame>
			</ScreenGui>
		</ReflexProvider>
	);
}

export default withHooksPure(CurrencyApp);

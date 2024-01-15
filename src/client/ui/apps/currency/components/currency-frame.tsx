import Roact from "@rbxts/roact";
import { withHooksPure } from "@rbxts/roact-hooked";
import { useSelector, useSelectorCreator } from "@rbxts/roact-reflex";
import { Players } from "@rbxts/services";
import { Currency } from "shared/configs/Currency";
import { CURRENCY_ICONS } from "shared/configs/Gui";
import { selectPlayerCurrency } from "shared/store/saves/save-selector";

interface Props extends Roact.PropsWithChildren {
	currency: Currency;
}

function CurrencyFrame(props: Props) {
	const balance = useSelectorCreator(selectPlayerCurrency, Players.LocalPlayer.Name, props.currency);

	return (
		<frame
			Key={props.currency}
			BackgroundColor3={Color3.fromRGB(152, 152, 152)}
			BorderSizePixel={0}
			Size={new UDim2(1, 0, 0, 65)}
		>
			<imagelabel
				Key="Icon"
				BackgroundTransparency={1}
				Image={CURRENCY_ICONS[props.currency]}
				Position={new UDim2(0, 206, 0, 8)}
				Size={new UDim2(0, 50, 0, 50)}
			/>
			<textlabel
				Key="Amount"
				BackgroundTransparency={1}
				Font={Enum.Font.FredokaOne}
				Position={new UDim2(0, 34, 0, 17)}
				Size={new UDim2(0, 166, 0, 31)}
				Text={tostring(balance) ?? "0"}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextSize={30}
				TextXAlignment={Enum.TextXAlignment.Right}
			>
				<uistroke Thickness={3} />
			</textlabel>
			<frame
				Key="BuyMore"
				BackgroundColor3={Color3.fromRGB(61, 220, 68)}
				BorderSizePixel={0}
				Position={new UDim2(0, -17, 0, 13)}
				Size={new UDim2(0, 40, 0, 40)}
			>
				<textlabel
					Key="Text"
					BackgroundTransparency={1}
					Font={Enum.Font.FredokaOne}
					Position={new UDim2(0, 6, 0, 0)}
					Size={new UDim2(0, 27, 0, 31)}
					Text="+"
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextSize={50}
				>
					<uistroke Thickness={3} />
				</textlabel>
				<uistroke Thickness={4} />
				<uicorner CornerRadius={new UDim(0, 25)} />
			</frame>
			<uistroke Thickness={5} />
			<uicorner CornerRadius={new UDim(0, 25)} />
		</frame>
	);
}

export default withHooksPure(CurrencyFrame);

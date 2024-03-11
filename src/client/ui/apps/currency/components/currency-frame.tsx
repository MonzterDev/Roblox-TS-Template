import { useSelectorCreator } from "@rbxts/react-reflex";
import React from "@rbxts/react";
import { Players } from "@rbxts/services";
import Frame from "client/ui/components/frame";
import ImageLabel from "client/ui/components/imageLabel";
import TextLabel from "client/ui/components/textLabel";
import { TextLabelButton } from "client/ui/components/textLabelButton";
import { Currency } from "shared/configs/Currency";
import { selectPlayerBalance } from "shared/store/selectors/players";
import { COLORS } from "shared/configs/Gui";

interface Props extends React.PropsWithChildren {
	currency: Currency;
}

export default function CurrencyFrame ( props: Props ) {
	const balance: number = useSelectorCreator( selectPlayerBalance, tostring(Players.LocalPlayer.UserId), props.currency )!;

	return (
		<Frame
			key={props.currency}
			size={new UDim2( 0, 265, 0, 65 )}
			uiCornerSize={new UDim( 0, 25 )}
		>
			<frame
				key="Holder"
				Size={new UDim2( 1, 0, 1, 0 )}
				BackgroundTransparency={1}
			>
				<uilistlayout
					FillDirection={Enum.FillDirection.Horizontal}
					HorizontalAlignment={Enum.HorizontalAlignment.Right}
					VerticalAlignment={Enum.VerticalAlignment.Center}
					Padding={new UDim( 0, 10 )}
					SortOrder={Enum.SortOrder.LayoutOrder}
				/>
				<uipadding
					PaddingRight={new UDim( 0, 5 )}
				/>
				<ImageLabel
					key="CurrencyIcon"
					image={props.currency}
					position={new UDim2( 0, 206, 0, 8 )}
					size={new UDim2( 0, 50, 0, 50 )}
					layoutOrder={1}
				/>
				<TextLabel
					key={`CurrencyAmount`}
					text={tostring(balance)}
					textSize={30}
					textXAlignment={Enum.TextXAlignment.Right}
					automaticSize={Enum.AutomaticSize.X}
				/>
			</frame>

			<TextLabelButton
				key="BuyCurrency"
				text="+"
				textSize={50}
				backgroundColor3={COLORS.Buttons.On}
				position={new UDim2( 0, 0, 0.5, 0 )}
				textPosition={new UDim2( 0.5, -1, 0.5, -4 )}
				size={new UDim2( 0, 40, 0, 40 )}
				buttonUiStrokeSize={4}
				uiCornerSize={new UDim( 0, 25 )}
				labelUiStrokeSize={3}
			/>
		</Frame>
	);
}

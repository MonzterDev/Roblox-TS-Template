import React from "@rbxts/react";
import { store } from "client/store";
import { COLORS } from "shared/configs/Gui";

interface Props extends React.PropsWithChildren {
	uiStrokeSize?: number;
	position?: UDim2;
	anchorPoint?: Vector2;
	size: UDim2;
}

export default function Exit ( props: Props ) {
	return (
		<textbutton
			key="Exit"
			BackgroundColor3={COLORS.Buttons.Off}
			BorderSizePixel={0}
			AnchorPoint={props.anchorPoint}
			Position={props.position}
			Size={props.size}
			Text={""}
			Event={{
				MouseButton1Click: () => {
					store.setHolderPage();
				}
			}}
		>
			<textlabel
				key="X"
				BackgroundTransparency={1}
				Font={Enum.Font.FredokaOne}
				AnchorPoint={new Vector2( 0.5, 0.5 )}
				Position={new UDim2( 0.5, 0, 0.5, 0 )}
				Size={new UDim2( 1, 0, 1, 0 )}
				Text="X"
				TextColor3={COLORS.White}
				TextSize={38}
			>
				<uistroke Thickness={5} />
			</textlabel>
			<uistroke
				ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
				Thickness={props.uiStrokeSize ?? 5}
			/>
			<uicorner CornerRadius={new UDim( 0, 18 )} />
		</textbutton>
	);
}

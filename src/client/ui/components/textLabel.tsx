import React from "@rbxts/react";

interface Props extends React.PropsWithChildren {
	backgroundTransparency?: number;
	position?: UDim2;
	anchorPoint?: Vector2;
	size?: UDim2;
	font?: Enum.Font;
	textSize?: number;
	textColor3?: Color3;
	text: string;

	uiStrokeSize?: number;
}

export default function TextLabel(props: Props) {
	return (
		<textlabel
			BackgroundTransparency={props.backgroundTransparency ?? 1}
			Position={props.position ?? new UDim2( 0.5, 0, 0.5, 0 )}
			AnchorPoint={props.anchorPoint ?? new Vector2( 0.5, 0.5 )}
			Size={props.size ?? new UDim2( 1, 0, 1, 0 )}
			Font={props.font ?? Enum.Font.FredokaOne}
			Text={props.text}
			TextSize={props.textSize ?? 20}
		>
			<uistroke
				LineJoinMode={Enum.LineJoinMode.Bevel}
				Thickness={props.uiStrokeSize ?? 5}
			/>

			{props["children"]}

		</textlabel>
	);
}

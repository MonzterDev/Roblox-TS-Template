import React from "@rbxts/react";

interface Props extends React.PropsWithChildren {
	key?: string;
	text: string;
	textSize: number;
	textScaled?: boolean;
	size?: UDim2;
	position?: UDim2;
	anchorPoint?: Vector2;
	automaticSize?: Enum.AutomaticSize;
	textColor3?: Color3;
	textXAlignment?: Enum.TextXAlignment;
	textYAlignment?: Enum.TextYAlignment;
	textWrap?: boolean;
	richText?: boolean;

	uiStrokeSize?: number;
	zIndex?: number;
}

export default function TextLabel ( props: Props ) {
	if ( !props.automaticSize || !props.size ) {
		props.automaticSize = props.size ? Enum.AutomaticSize.None : Enum.AutomaticSize.XY;
	}

	return (
		<textlabel
			key={props.key ?? props.text}
			AutomaticSize={props.automaticSize}
			Position={props.position ?? new UDim2( 0.5, 0, 0.5, 0 )}
			AnchorPoint={props.anchorPoint ?? new Vector2( 0.5, 0.5 )}
			Size={props.size}
			TextScaled={props.textScaled}
			Font={Enum.Font.FredokaOne}
			TextColor3={props.textColor3 ?? new Color3( 1, 1, 1 )}
			TextXAlignment={props.textXAlignment}
			TextYAlignment={props.textYAlignment}
			Text={props.text}
			TextSize={props.textSize}
			BackgroundTransparency={1}
			TextWrap={props.textWrap}
			RichText={props.richText}
			ZIndex={props.zIndex}
		>
			<uistroke Thickness={props.uiStrokeSize ?? 5} />
		</textlabel>
	);
}

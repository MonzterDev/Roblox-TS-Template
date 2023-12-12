import Roact from "@rbxts/roact";

interface Props extends Roact.PropsWithChildren {
	native: Roact.JsxInstanceProperties<TextLabel>;
	text: Roact.JsxInstanceProperties<TextLabel>["Text"];
	key?: string;
	uiStrokeSize?: number;
}

function TextLabel(props: Props) {
	const { key } = props;
	const defaultProps: Props["native"] = {
		BackgroundTransparency: 1,
		Position: UDim2.fromScale(0.5, 0.5),
		AnchorPoint: new Vector2(0.5, 0.5),
		Size: UDim2.fromScale(1, 1),
		Font: Enum.Font.FredokaOne,
		TextScaled: true,
		TextColor3: Color3.fromRGB(255, 255, 255),
		Text: props.text,
	};

	props.uiStrokeSize = props.uiStrokeSize ?? 6;

	const cleanProps = { ...props };
	cleanProps.uiStrokeSize = undefined;
	cleanProps.key = undefined;

	return (
		<textlabel Key={key} {...{ ...defaultProps, ...props.native }}>
			<uistroke LineJoinMode={Enum.LineJoinMode.Bevel} Thickness={props.uiStrokeSize} />
		</textlabel>
	);
}

export default TextLabel;

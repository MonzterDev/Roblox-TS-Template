import Roact from "@rbxts/roact";
import { useEffect, withHooksPure } from "@rbxts/roact-hooked";
import { CollectionService } from "@rbxts/services";

interface Props extends Roact.PropsWithChildren {
	key?: string;
}

function ScreenGui(props: Props) {
	const uiScaleRef = Roact.createRef<UIScale>();

	useEffect(() => {
		const uiScale = uiScaleRef.getValue();
		if (!uiScale) return;

		CollectionService.AddTag(uiScale, "scale_component");
		uiScale.SetAttribute("base_resolution", new Vector2(1920, 1080));
	}, []);

	return (
		<screengui Key={props.key ?? "Gui"} Enabled={true}>
			<uiscale Scale={1} Ref={uiScaleRef} />
			{props[Roact.Children]}
		</screengui>
	);
}

export default withHooksPure(ScreenGui);

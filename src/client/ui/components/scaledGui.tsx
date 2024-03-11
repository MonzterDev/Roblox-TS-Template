import React, { createRef, useEffect } from "@rbxts/react";
import { CollectionService } from "@rbxts/services";
interface Props extends React.PropsWithChildren {

}

export default function ScreenGui(props: Props) {
	const uiScaleRef = createRef<UIScale>()

	useEffect(() => {
		const uiScale = uiScaleRef.current
		if (!uiScale) return;

		CollectionService.AddTag(uiScale, "scale_component");
		uiScale.SetAttribute("base_resolution", new Vector2(1920, 1080));
	}, []);

	return (
		<screengui
			Enabled={true}
		>
			<uiscale
				Scale={1}
				ref={uiScaleRef}
			/>

			{props["children"]}

		</screengui>
	);
}

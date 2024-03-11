import React from "@rbxts/react";
import TextButton from "./textButton";
import TextLabel from "./textLabel";

interface Props extends React.PropsWithChildren {
    key?: string;
    text?: string;
    textSize?: number;
    size?: UDim2;
    position?: UDim2;
    textPosition?: UDim2;
    textAnchorPoint?: Vector2;
    anchorPoint?: Vector2;
    automaticSize?: Enum.AutomaticSize;
    textColor3?: Color3;
    textXAlignment?: Enum.TextXAlignment;
    textYAlignment?: Enum.TextYAlignment;
    backgroundColor3?: Color3;
    backgroundTransparency?: number;
    layoutOrder?: number;

    buttonUiStrokeSize?: number;
    labelUiStrokeSize?: number;
    uiCornerSize?: UDim;

    onClick?: () => void;
}

export function TextLabelButton ( props: Props ) {
    return (
        <TextButton
            key={props.key}
            size={props.size ?? UDim2.fromScale( 1, 1 )}
            position={props.position ?? new UDim2( 0.5, 0, 0.5, 0 )}
            anchorPoint={props.anchorPoint ?? new Vector2( 0.5, 0.5 )}
            automaticSize={props.automaticSize}
            backgroundColor3={props.backgroundColor3}
            backgroundTransparency={props.backgroundTransparency}
            uiStrokeSize={props.buttonUiStrokeSize}
            uiCornerSize={props.uiCornerSize}
            onClick={props.onClick}
            layoutOrder={props.layoutOrder}
        >
            {props["children"]}

            {props.text !== undefined && <TextLabel
                text={props.text ?? ""}
                textSize={props.textSize ?? 24}
                textColor3={props.textColor3}
                textXAlignment={props.textXAlignment}
                textYAlignment={props.textYAlignment}
                uiStrokeSize={props.labelUiStrokeSize}
                position={props.textPosition}
                anchorPoint={props.textAnchorPoint}
            />
            }
        </TextButton>
    );
}

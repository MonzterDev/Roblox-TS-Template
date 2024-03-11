import React, { useEffect, useState } from "@rbxts/react";
import { COLORS } from "shared/configs/Gui";

interface Props extends React.PropsWithChildren {
    key?: string;
    text?: string;
    textSize?: number;
    size?: UDim2;
    position?: UDim2;
    anchorPoint?: Vector2;
    automaticSize?: Enum.AutomaticSize;
    textColor3?: Color3;
    textXAlignment?: Enum.TextXAlignment;
    textYAlignment?: Enum.TextYAlignment;
    backgroundColor3?: Color3;
    backgroundTransparency?: number;
    layoutOrder?: number;

    uiStrokeSize?: number;
    uiCornerSize?: UDim;

    onClick?: () => void;
}


export default function TextButton ( props: Props ) {
    let automaticSize = props.automaticSize
    if ( !automaticSize ) {
        automaticSize = props.size ? Enum.AutomaticSize.None : Enum.AutomaticSize.XY;
    }

    return (
        <textbutton
            key={props.key ?? props.text}
            AutomaticSize={props.automaticSize}
            Position={props.position ?? new UDim2( 0.5, 0, 0.5, 0 )}
            AnchorPoint={props.anchorPoint ?? new Vector2( 0.5, 0.5 )}
            Size={props.size}
            Font={Enum.Font.FredokaOne}
            TextColor3={props.textColor3 ?? new Color3( 1, 1, 1 )}
            TextXAlignment={props.textXAlignment}
            TextYAlignment={props.textYAlignment}
            Text={props.text ?? ""}
            TextSize={props.textSize}
            BackgroundTransparency={props.backgroundTransparency ?? 0}
            BackgroundColor3={props.backgroundColor3 ?? COLORS.PrimaryBackground}
            LayoutOrder={props.layoutOrder}
            Event={{
                MouseButton1Click: props.onClick,
            }}
        >

            {props["children"]}

            <uistroke Thickness={props.uiStrokeSize ?? 5} ApplyStrokeMode={Enum.ApplyStrokeMode.Border} />
            <uistroke Thickness={props.uiStrokeSize ?? 5} ApplyStrokeMode={Enum.ApplyStrokeMode.Contextual} />
            <uicorner CornerRadius={props.uiCornerSize ?? new UDim( 0, 10 )} />
        </textbutton>
    );
}

import React, { useEffect, useState } from "@rbxts/react";
import { TweenService } from "@rbxts/services";

interface Props extends React.PropsWithChildren {
    position?: UDim2 | React.Binding<UDim2>;
    anchorPoint?: Vector2;
    size?: UDim2;
    backgroundTransparency?: number;
    backgroundColor3?: Color3;
    automaticSize?: Enum.AutomaticSize;
    layoutOrder?: number;

    uiStrokeSize?: number;
    uiCornerSize?: UDim;

    zIndex?: number;
}


export default function Frame ( props: Props ) {
    props.backgroundTransparency = props.backgroundTransparency ?? 0; // Do this to make Stroke condition simpler

    return (
        <frame
            BackgroundColor3={props.backgroundColor3 ?? Color3.fromRGB( 0, 163, 255 )}
            BackgroundTransparency={props.backgroundTransparency ?? 0}
            BorderSizePixel={0}
            AnchorPoint={props.anchorPoint ?? new Vector2( 0.5, 0.5 )}
            Position={props.position ?? new UDim2( 0.5, 0, 0.5, 0 )}
            Size={props.size ?? new UDim2( 0,0,0,0 )}
            AutomaticSize={props.automaticSize ?? Enum.AutomaticSize.None}
            ZIndex={props.zIndex}
            LayoutOrder={props.layoutOrder}
        >

            {props.children}

            { props.backgroundTransparency === 0 && <uistroke Thickness={props.uiStrokeSize ?? 5} />}
            <uicorner CornerRadius={props.uiCornerSize ?? new UDim( 0, 22 )} />
        </frame>
    );
}

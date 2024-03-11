import React, { useEffect, useState } from "@rbxts/react";
import { IMAGES, ImageName } from "shared/configs/Gui";

interface Props extends React.PropsWithChildren {
    image?: ImageName;
    position?: UDim2 | React.Binding<UDim2>;
    anchorPoint?: Vector2;
    size?: UDim2;
    backgroundTransparency?: number;
    backgroundColor3?: Color3;
    layoutOrder?: number;
    zIndex?: number;
    visible?: boolean;
}


export default function ImageLabel ( props: Props ) {
    return (
        <imagelabel
            ScaleType={Enum.ScaleType.Fit}
            Position={props.position}
            AnchorPoint={props.anchorPoint}
            Size={props.size ?? new UDim2( 1, 0, 1, 0 )}
            BackgroundTransparency={props.backgroundTransparency ?? 1}
            BackgroundColor3={props.backgroundColor3}
            LayoutOrder={props.layoutOrder}
            ZIndex={props.zIndex ?? 1}
            Image={`rbxassetid://${IMAGES[props.image ?? "Settings"]}`}
            Visible={props.visible ?? true}
        >
            {props["children"]}
        </imagelabel>
    );
}

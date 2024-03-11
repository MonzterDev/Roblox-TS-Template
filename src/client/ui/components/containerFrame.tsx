import React from "@rbxts/react";

interface Props extends React.PropsWithChildren {
    anchorPoint?: Vector2;
    position?: UDim2;
    size: UDim2;
    scrollBarImageColor3?: Color3;
    scrollBarThickness?: number;
    automaticCanvasSize?: Enum.AutomaticSize;
    backgroundColor3?: Color3;
    backgroundTransparency?: number;
    layoutOrder?: number;

    cellPadding?: UDim2;
    cellSize?: UDim2;
    horizontalAlignment?: Enum.HorizontalAlignment;
    verticalAlignment?: Enum.VerticalAlignment;

    paddingTop?: UDim;
    paddingBottom?: UDim;
    paddingLeft?: UDim;
    paddingRight?: UDim;
    allPadding?: UDim;
}

export default function ContainerFrame ( props: Props ) {
    if ( props.allPadding ) {
        props.paddingTop = props.allPadding;
        props.paddingBottom = props.allPadding;
        props.paddingLeft = props.allPadding;
        props.paddingRight = props.allPadding;
    }

    if ( props.backgroundTransparency === undefined ) {
        props.backgroundTransparency = props.backgroundColor3 ? 0 : 1;
    }

    return (
        <scrollingframe
            key="Container"
            AnchorPoint={props.anchorPoint}
            AutomaticCanvasSize={props.automaticCanvasSize ?? Enum.AutomaticSize.Y}
            BackgroundTransparency={props.backgroundTransparency}
            BackgroundColor3={props.backgroundColor3}
            BorderSizePixel={0}
            CanvasSize={new UDim2( 0, 0, 0, 0 )}
            Position={props.position}
            ScrollBarImageColor3={props.scrollBarImageColor3 ?? Color3.fromRGB( 0, 44, 68 )}
            ScrollBarThickness={props.scrollBarThickness ?? 6}
            Size={props.size}
            VerticalScrollBarInset={Enum.ScrollBarInset.ScrollBar}
            LayoutOrder={props.layoutOrder}
        >
            {( props.cellPadding || props.cellSize ) &&
                <uigridlayout
                    CellPadding={props.cellPadding}
                    CellSize={props.cellSize}
                    HorizontalAlignment={props.horizontalAlignment}
                    VerticalAlignment={props.verticalAlignment}
                    SortOrder={Enum.SortOrder.LayoutOrder}
                />
            }
            <uipadding
                PaddingBottom={props.paddingBottom}
                PaddingLeft={props.paddingLeft}
                PaddingRight={props.paddingRight}
                PaddingTop={props.paddingTop}
            />

            {props["children"]}

        </scrollingframe>
    );
}

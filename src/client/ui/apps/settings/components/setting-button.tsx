import { useSelector } from "@rbxts/react-reflex";
import React from "@rbxts/react";
import { Events } from "client/network";
import TextLabel from "client/ui/components/textLabel";
import { Setting } from "shared/configs/Settings";
import { Players, RunService } from "@rbxts/services";
import { selectPlayerSetting } from "shared/store/selectors/players";
import { GetStatePlayerId } from "client/ui/utils/GetStatePlayerId";
import { store } from "client/store";

interface Props {
    setting: Setting
}

export default function SettingButton ( props: Props ) {
    const value = useSelector( selectPlayerSetting( GetStatePlayerId(), props.setting ) )

    const click = () => {
        const isInGame = RunService.IsRunning();
        if ( isInGame )
            Events.toggleSetting( props.setting );
        else
            store.toggleSetting( GetStatePlayerId(), props.setting );
    }

    return (
        <textbutton
            key={props.setting}
            BackgroundColor3={Color3.fromRGB( 0, 137, 215 )}
            Selectable={false}
            Text={""}
            Event={{
                MouseButton1Click: click
            }}
        >
            <textbutton
                key="Toggle"
                BackgroundColor3={value ? Color3.fromRGB( 61, 220, 68 ) : Color3.fromRGB( 232, 70, 70 )}
                BorderSizePixel={0}
                Position={new UDim2( 0, 480, 0, 18 )}
                Size={new UDim2( 0, 30, 0, 30 )}
                Selectable={true}
                Text={""}
                LayoutOrder={-1}
                Event={{
                    MouseButton1Click: click
                }}
            >
                <uistroke
                    ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
                    Color={Color3.fromRGB( 0, 52, 82 )}
                    Thickness={3}
                />
                <uicorner CornerRadius={new UDim( 0, 10 )} />
            </textbutton>

            <TextLabel
                key={props.setting}
                text={props.setting}
                textSize={32}
                automaticSize={Enum.AutomaticSize.XY}
                textXAlignment={Enum.TextXAlignment.Left}
                uiStrokeSize={3}
            />

            <uistroke
                ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
                Color={Color3.fromRGB( 0, 52, 82 )}
                Thickness={3}
            />
            <uicorner CornerRadius={new UDim( 0, 10 )} />
            <uilistlayout
                FillDirection={Enum.FillDirection.Horizontal}
                HorizontalAlignment={Enum.HorizontalAlignment.Left}
                SortOrder={Enum.SortOrder.LayoutOrder}
                VerticalAlignment={Enum.VerticalAlignment.Center}
                Padding={new UDim( 0, 10 )}
            />
            <uipadding
                PaddingLeft={new UDim( 0, 10 )}
            />

        </textbutton>
    );
}

import React from "@rbxts/react";
import ContainerFrame from "client/ui/components/containerFrame";
import Exit from "client/ui/components/exit";
import Frame from "client/ui/components/frame";
import Title from "client/ui/components/title";
import { SETTINGS } from "shared/configs/Settings";
import SettingButton from "./components/setting-button";

interface Props {

}

export default function SettingsApp ( props: Props ) {

    const settingButtons = SETTINGS.map( setting => {
        return <SettingButton setting={setting} />;
    } )

    return (
        <Frame
            key={"Settings"}
            anchorPoint={new Vector2( 0.5, 0.5 )}
            position={new UDim2( 0.5, 0, 0.5, 0 )}
            size={new UDim2( 0, 600, 0, 600 )}
        >
            <Title
                text="Settings"
                anchorPoint={new Vector2( 0.5, 0 )}
                position={new UDim2( 0.5, 0, 0, 20 )}
                size={new UDim2( 0, 366, 0, 73 )}
            />

            <Exit
                size={new UDim2( 0, 65, 0, 65 )}
                position={new UDim2( 1, 30, 0, -30 )}
                anchorPoint={new Vector2( 1, 0 )}
            />

            <ContainerFrame
                anchorPoint={new Vector2( 0.5, 0 )}
                position={new UDim2( 0.5, 0, 0, 120 )}
                size={new UDim2( 0, 561, 0, 441 )}

                cellPadding={new UDim2( 0, 0, 0, 15 )}
                cellSize={new UDim2( 0.95, 0, 0, 65 )}
                horizontalAlignment={Enum.HorizontalAlignment.Center}

                paddingTop={new UDim( 0, 10 )}
                paddingBottom={new UDim( 0, 10 )}
            >

                {
                    settingButtons
                }

            </ContainerFrame>
        </Frame>
    );
}

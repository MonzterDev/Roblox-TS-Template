import React from "@rbxts/react";
import Exit from "client/ui/components/exit";
import Frame from "client/ui/components/frame";
import Title from "client/ui/components/title";

interface Props {

}

export default function SettingsApp(props: Props) {
    return (
        <Frame
            anchorPoint={new Vector2( 0.5, 0.5 )}
            position={new UDim2( 0.5, 0, 0.5, 0 )}
            size={new UDim2( 0, 600, 0, 600 )}
        >
            <Title
                text="Settings"
                anchorPoint={new Vector2( 0.5, 0 )}
                position={new UDim2( 0.5, 0, 0, 20 )}
                size={new UDim2( 0, 366, 0,  73 )}
            />

            <Exit
                size={new UDim2( 0, 65, 0, 65 )}
            />

        </Frame>
    );
}

/// <reference types="@rbxts/testez/globals" />

import { RunService } from "@rbxts/services";
import { store } from "server/store";

export = () => {
    afterAll( () => {
        if ( RunService.IsRunMode() ) {
            return;
        }

        store.destroy();
    } );
};

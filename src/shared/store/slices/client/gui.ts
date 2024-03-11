import { createProducer } from "@rbxts/reflex";
import { HolderPage } from "shared/configs/Gui";

export interface GuiState {
    holderPage?: HolderPage
}

const initalState: GuiState = {

};


export const guiSlice = createProducer( initalState, {
    setHolderPage: ( state, page?: HolderPage ) => ( {
        ...state,
        holderPage: page,
    })
})

import { SharedState } from "..";

export const selectHolderPage = ( state: SharedState ) => {
    return state.client.gui.holderPage;
}

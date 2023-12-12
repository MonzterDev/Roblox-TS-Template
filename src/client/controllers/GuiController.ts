import { Controller, OnStart } from "@flamework/core";
import Roact from "@rbxts/roact";
import { Players } from "@rbxts/services";
import currencyApp from "client/ui/apps/currency/currency-app";

@Controller({})
export class GuiController implements OnStart {
	private playerGui = Players.LocalPlayer.WaitForChild("PlayerGui");

	onStart() {
		const app = Roact.createElement(currencyApp, {}, {});
		Roact.mount(app, this.playerGui, "CurrencyApp");
	}
}

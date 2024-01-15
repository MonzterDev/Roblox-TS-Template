import { CommandContext } from "@rbxts/cmdr";
import { store } from "server/store";
import { Currency } from "shared/configs/Currency";

export = function (context: CommandContext, player: Player, currency: Currency, amount: number) {
	store.adjustPlayerCurrency(player.Name, currency, amount);
};

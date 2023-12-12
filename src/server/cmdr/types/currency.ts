import { Registry } from "@rbxts/cmdr";
import { CURRENCIES } from "shared/configs/Currency";

export = function (registry: Registry) {
	registry.RegisterType("currency", registry.Cmdr.Util.MakeEnumType("currency", [...CURRENCIES]));
};

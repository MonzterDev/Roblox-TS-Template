import { CommandDefinition } from "@rbxts/cmdr";

export = identity<CommandDefinition>({
	Name: "giveCurrency",
	Aliases: ["gC"],
	Description: "Increase the Players Currency",
	Group: "Admin",
	Args: [
		{
			Type: "player",
			Name: "player",
			Description: "Player",
		},
		{
			Type: "currency",
			Name: "Currency",
			Description: "Currency",
		},
		{
			Type: "number",
			Name: "Amount",
			Description: "Amount",
		},
	],
});

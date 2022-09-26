import { CommandArgument, CommandDefinition } from "@rbxts/cmdr";

export = identity<CommandDefinition>( {
    Name: "getData",
    Aliases: ["gD"],
    Description: "Get a Players Data",
    Group: "Admin",
    Args: [
        {
            Type: "player",
            Name: "player",
            Description: "Player",
        },
        {
            Type: "data",
            Name: "Data",
            Description: "Data",
        },
    ]
} )
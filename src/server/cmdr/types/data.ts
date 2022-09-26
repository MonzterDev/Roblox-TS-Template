import { TypeDefinition, Registry } from "@rbxts/cmdr";

export = function ( registry: Registry ) {
    registry.RegisterType( "data", registry.Cmdr.Util.MakeEnumType( "data", ["taps", "gems", "settings"] ) )
}
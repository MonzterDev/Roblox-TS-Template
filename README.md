# Roblox-TS-Template 🚀

This Roblox TypeScript (TS) template integrates popular frameworks and utilities such as Flamework, ProfileService, Cmdr, Roact, Reflex, and more.

Inspired by ReturnedTrue's [Template](https://github.com/ReturnedTrue/RobloxTSTemplate).

## Instructions 🛠️

To set up and start using this template, use these three commands in a terminal located in the same directory as this repository:

1. `npm i` - Installs all dependencies.
2. `npm run build` - Builds the project.
3. `npm run watch` - Initiates the watch mode for continuous development.

Startup **Rojo** and you should be able to sync to Studio easily!

## Resources 📚

* [Flamework](https://fireboltofdeath.dev/docs/flamework)
* [ProfileService](https://madstudioroblox.github.io/ProfileService/)
* [Cmdr](https://eryn.io/Cmdr/)
* [Roact](https://roblox.github.io/roact/)
* [Reflex](https://littensy.github.io/reflex/)
* [rbxts-transform-debug](https://www.npmjs.com/package/rbxts-transform-debug)

## Features 🎮

- Player data system using ProfileService.
- State is managed and synced from the Server to Client using Reflex.
- Simple Currency labels UI created using Roact and hooked into Reflex.
- Cmdr terminal access via F2 key.
- Utilize the GiveCurrency command from Cmdr to adjust a player's currency amount.

## Tips 💡

* Take advantage of `rbxts-transform-debug` to enhance your debugging experience! Use `$print(string)` for a neatly displayed output.

Example:

```
[src/shared/module.ts:8] 10 > 20 = false
[src/shared/module.ts:9] x = 42
[src/shared/module.ts:2] `Hello from ${name}!` = Hello from Vorlias!
[src/shared/module.ts:10] Hello from Vorlias!
```

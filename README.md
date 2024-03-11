# Roblox-TS-Template 🚀

This Roblox TypeScript (TS) template integrates popular frameworks and utilities such as Flamework, ProfileService, Cmdr, React, Reflex, TestEZ, UI Labs, and more.

The goal of this project is to be able to quickly launch into creating your next project, without having to set the same things up again. I also intend on new Roblox TS users to be able to use and learn from this project as well, by being able to see how common systems are implemented.

- Inspired by ReturnedTrue's [Template](https://github.com/ReturnedTrue/RobloxTSTemplate).
- Lots of code was taken from or inspired by the king [Littensy](https://github.com/littensy).

## Instructions 🛠️

To set up and start using this template, use these three commands in a terminal located in the same directory as this repository:

1. `npm i` - Installs all dependencies.
2. `npm run build` - Builds the project.
3. `npm run watch` - Initiates the watch mode for continuous development.

Startup **Rojo** and you should be able to sync to Studio easily!

TIP: If you've followed those steps, but receive an error in the terminal similar to `compilerOptions.jsxFactory must be Roact.createElement!` then follow these shorts steps [here](https://www.npmjs.com/package/@rbxts/react-roblox#-troubleshooting).

## Resources 📚

* [Flamework](https://fireboltofdeath.dev/docs/flamework)
* [ProfileService](https://madstudioroblox.github.io/ProfileService/)
* [Cmdr](https://eryn.io/Cmdr/)
* [React](https://www.npmjs.com/package/@rbxts/react-roblox)
* [Reflex](https://littensy.github.io/reflex/)
* [UI Labs](https://ui-labs-roblox.github.io/ui-labs-docs/)
* [TestEZ](https://www.npmjs.com/package/@rbxts/testez)
* [rbxts-transform-debug](https://www.npmjs.com/package/rbxts-transform-debug)

## Features 🎮

- Player data system using ProfileService.
- State is managed and synced from the Server to the Client using Reflex.
- Simple Currency labels UI, more complex Settings UI, & Holder UI have been created using React and hooked into the state using Reflex.
- Cmdr terminal access via F2 key.
- Utilize the GiveCurrency command from Cmdr to adjust a player's currency amount.

## Tips 💡

### Tests
Download and use the [TestEZ Companion](https://marketplace.visualstudio.com/items?itemName=tacheometrist.testez-companion) Visual Studio Code plugin to run your tests without even starting your game!

### Linting
I found myself constantly struggling with using ESLint & Prettier for linting. Until I discovered the [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint) Visual Studio Code plugin. You should still have the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) plugin installed, but you only need to have the Prettier ESLint plugin enabled.

This isn't required, but solved my linting issues.

### Preview UIs
You can use the [UI Labs](https://ui-labs-roblox.github.io/ui-labs-docs/) Studio plugin to easily visualize and test your React UIs without even starting up your game!

### Debug
Take advantage of `rbxts-transform-debug` to enhance your debugging experience! Use `$print(string)` for a neatly displayed output.

Example:

```
[src/shared/module.ts:8] 10 > 20 = false
[src/shared/module.ts:9] x = 42
[src/shared/module.ts:2] `Hello from ${name}!` = Hello from Vorlias!
[src/shared/module.ts:10] Hello from Vorlias!
```

### Automatically Index Children
This is taken directly from the Roblox TS website because I think it's worth knowing about. What if you wanted to access something you're currently storing inside of the Workspace service in Studio? Well, Roblox TS would have no clue of that thing existing inside of there. Luckily, you can solve this issue extremely easily.

It simply requires the [io-serve](https://www.npmjs.com/package/io-serve) package and the [rbxts-object-to-tree
](https://create.roblox.com/store/asset/3379119778/rbxtsobjecttotree?externalSource=www) Roblox Studio plugin.

You can find the full guide [here](https://roblox-ts.com/docs/guides/indexing-children#rbxts-object-to-tree-plugin-by-validark).

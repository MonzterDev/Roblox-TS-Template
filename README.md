# Roblox-TS-Template

 This template includes **Flamework**, **ProfileService**, **Cmdr**, **Rodux**, & some **basic utilities**!

 Inspired by ReturnedTrue's [Template](https://github.com/ReturnedTrue/RobloxTSTemplate)

## Instructions

Type the following 3 commands in a terminal which is in the same directory as this repo:

1. `npm i` which will install all dependencies
2. `npm run build` which will build the project
3. `npm run watch` which will start the watch mode

Startup **Rojo** and you should be able to **sync** to **Studio** easily!

## Resources

* [Flamework](https://fireboltofdeath.dev/docs/flamework)
* [ProfileService](https://madstudioroblox.github.io/ProfileService/)
* [Cmdr](https://eryn.io/Cmdr/)
* [Rodux](https://github.com/Roblox/rodux)
* [rbxts-transform-debug](https://www.npmjs.com/package/rbxts-transform-debug)

## Tips

`rbxts-transform-debug` enables us to use `$print(string)` and have it displayed nicely in the output.
```
[src/shared/module.ts:8] 10 > 20 = false
[src/shared/module.ts:9] x = 42
[src/shared/module.ts:2] `Hello from ${name}!` = Hello from Vorlias!
[src/shared/module.ts:10] Hello from Vorlias!
```

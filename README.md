# ESM test

## typescript

- use typescript v4.5+

```sh
npx tsc -p tsconfig.json
```

## original notes

Have to run in debugger in order to single step into `json5.parse()` in order to see which code node includes when running either `esm.mjs` or `cjs.cjs`.

```sh
node --version # v16.4.2

# run as per current 2.2.0 setup
node --inspect ./src/cjs.cjs # OK = uses cjs code = ./node_modules/json5/lib/parse.js
node --inspect ./src/esm.mjs # BROKEN = uses cjs code = ./node_modules/json5/lib/parse.js

# show package.mod.json diffs
code --diff json5/package.orig.json json5/package.mod.json

# copy package.mod.json = has "exports:" in it
cp json5/package.mod.json node_modules/json5/package.json

# re-run with mod applied
node --inspect ./src/cjs.cjs # OK = uses cjs **bundled** code = ./node_modules/json5/dist/index.js
node --inspect ./src/esm.mjs # OK = uses **esm** code = ./node_modules/json5/dist/index.mjs
```
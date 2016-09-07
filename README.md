# Typescript Template

A Typescript template for creating NPM packages. Uses Webpack for generating generating bundles. The `.gitignore` and `.npmignore` files are setup appropriately. NPM will ignore all the TypeScript source files. There is a small type checking module included as a demonstration and to check all the npm scripts are working.

## Usage

Get a copy from Github

```
git clone https://github.com/tomrickard/npm-typescript-template.git
```

Remove or rename the Git `remote` with:

```
// Remove
git remote rm origin
// Rename
git remote rename origin old-origin
```

Rename the package.json name and version to you project name and version:

```
{
  "name": "YOUR-PACKAGE-NAME",
  "version": "1.0.0",
  ....

  "author": "YOUR-NAME",
  ...

  }
}
```

Add your git repo `remote`
```
// Github example
https://github.com/<USER>/<REPO-NAME>.git

// Bitbucket example
https://<USER>@bitbucket.org/<USER>/<REPO-NAME>.git
```

Write some code!

## NPM scripts

```
npm run test       // starts Mocha up, runs tests in the /test/ folder. Uses mocha.opts
npm run typings    // runs local version of Typings (i.e. do npm run typings install someModule)
npm run tsc        // runs TypeScript compiler (uses tsconfig.json as config file)
npm run tsc-w      // runs TypeScript compiler in watch mode
npm run webpack    // runs Webpack
npm run stylus     // runs Stylus compiler (looks in stylus folder)
npm run stylus-w   // runs Stylus compiler in watch mode
npm run webpack    // runs webpack (uses webpack.config.js as config file)
npm run build      // => npm run stylus && npm run tsc && npm run webpack
```

## Importing other NPM modules

First install the module:

```
npm install --save someModule
```

If the module is written in TypeScript the type definition file/s should automatically be loaded when you import the module. If the module was written in JavaScript you will need to grab the type definitions using typings. Simply run:

```
npm run typings install --save someModule
``` 

If running typings for the first time, make sure you tell the TypeScript compiler about the typings. Open `tsconfig.json` and add `"./typings/index.d.ts"` under the files section if it isn't already there.

```
{
    "compilerOptions": {
        "module": "commonjs",
        "declaration": true,
        "outDir": "lib/"
    },
    "files": [
        "./src/index.ts",
    ]
}
```

## Stylus

Stylus is included as a personal preference. It makes it easy to generate CSS for packages designed to run in the browser. Feel free to delete it. It outputs to `dist/css`.

# License

MIT
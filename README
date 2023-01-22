# clash-bot

## Dev
### Dependencies
 * `rimraf`: Removes the dynamic compiled files from previous builds before a new build.
 * `babel`: The packages `@babel/core`, `@bable/cli`, and `@babel/preset-env` allow the use of babel for extra language features.
 * `dotenv`: This package allows the key-value pairs from a `.env` file to be stored in the `process.env` variable of the runtime.

### Scripts
The following pieces of logic are used to make run scripts to be ran using with npm in the format`npm run <command>`.
 * __Cleaning__: `rimraf` is used to removed old files/directories from previous builds.
 *__Transpilation__: `babel` is used to convert the ES6 & module syntax used in the source code to Javascript readable by the runtime.
 *__Running__: `node` is the executable used to run the code. Also, the `-r dotenv/config` flag is passed in to the run command to preload the `.env` file in to the `process.env` runtime variable so it doesn't have to be loaded in the source code.
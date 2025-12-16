# Example app (developer-focused)

This small Expo app is included to help you develop and test the `react-native-animated-rolling-numbers` library locally.

Goals

- Run the UI quickly while editing the library source in `../../src`.
- Avoid publishing the library for every change — the example imports the local copy of the package.

Quick start (PowerShell)

```powershell
cd example/app
pnpm install      # or `npm install` if you prefer npm
# start the bundler with cache cleared
npx expo start -c
```

How the example uses the library

- The app depends on the local package via `file:../../` in `package.json`. That makes `import 'react-native-animated-rolling-numbers'` resolve to the repo root.
- Edit files under `../../src` and the example should pick up changes. If changes don't appear, restart Expo and clear the cache.

Metro / resolution notes

- Metro needs to resolve modules from the same copy of `react` / `react-native`. If you see errors about duplicate React or hooks, ensure the example uses the workspace/root `node_modules` for those packages.
- If you run into duplicate module issues, create or update `metro.config.js` with `watchFolders` and `resolver.extraNodeModules` pointing to the repo root `node_modules`. Example:

```js
// example/app/metro.config.js
const path = require("path");
module.exports = {
  watchFolders: [path.resolve(__dirname, "..", "..")],
  resolver: {
    extraNodeModules: {
      react: path.resolve(__dirname, "..", "..", "node_modules", "react"),
      "react-native": path.resolve(
        __dirname,
        "..",
        "..",
        "node_modules",
        "react-native"
      ),
    },
  },
};
```

Reanimated

- This project uses `react-native-reanimated`. The Babel plugin is required and should be present in `babel.config.js` (the example includes it). For native builds, follow Reanimated's installation guide.

Local linking options

- file: protocol (used here)
  - `"react-native-animated-rolling-numbers": "file:../../"` in `package.json` installs the local package into `example/app/node_modules`.
- workspaces (recommended for monorepos)
  - Use pnpm/yarn workspaces so the app and library share one node_modules tree and avoid duplicate React instances.

Troubleshooting

- If import resolution fails after install:
  - Delete `node_modules` and lockfile inside `example/app` and reinstall with your chosen package manager.
  - Restart Expo bundler with `npx expo start -c` to clear Metro cache.
- If you see `Unable to resolve '.../helpers/interopRequireDefault'`, install `@babel/runtime` in `example/app`.

Development tips

- Use `pnpm install` at repo root with workspaces if you want to centralize dependencies.
- Add an npm script to the repo root for convenience (already available): `npm run example` (from repo root) to `cd` into `example` and `expo start`.

If you'd like, I can add a `metro.config.js` file here pre-wired to the repository root and a `start` helper script in the app. Want me to add those?

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

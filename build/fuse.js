'use strict'

require('./check-versions')()

const path = require('path');

console.log(path.join('.', __dirname, '../src'));
const {
  FuseBox,
  VueComponentPlugin,
  QuantumPlugin,
  HTMLPlugin,
  SassPlugin,
  CSSPlugin,
  CSSResourcePlugin,
  WebIndexPlugin,
  Sparky
} = require("fuse-box");

let fuse;

const DIRS = {
	src: '../src',
	dist: '../dist',
	assets: './assets'
}


Sparky.task("clean", () => Sparky.src(DIRS.dist).clean("dist/"));
Sparky.task("watch-assets", () => Sparky.watch(`${DIRS.assets}/*.*`, { base: DIRS.src }).dest(DIRS.dist));
Sparky.task("copy-assets", () => Sparky.src(`${DIRS.assets}/*.*`, {  base: DIRS.src }).dest(DIRS.dist));

Sparky.task("config", () => {
  fuse = FuseBox.init({
    homeDir: DIRS.src,
		output: `${DIRS.dist}/$name.js`,
    sourceMaps: true,
    target: 'browser',
    useTypescriptCompiler: true,
    polyfillNonStandardDefaultUsage: true,
    plugins: [
      VueComponentPlugin({
        style: [
          SassPlugin({
            importer: true
          }),
          CSSResourcePlugin({
            dist: "../dist/assets",
            resolve: f => `/assets/${f}`
          }),
          CSSPlugin({
            group: 'components.css',
            inject: 'components.css'
          })
        ]
      }),
      CSSPlugin(),
      WebIndexPlugin({
        template: "../src/index.html"
      }),
    ]
  });

  fuse.dev({
    open: true,
    port: 4545
  });

  const vendor = fuse.bundle("vendor")
    .instructions("~ main.js");

  const app = fuse.bundle("app")
    .instructions("> [main.js]");

  app.watch().hmr();
})

Sparky.task("default", ["clean", "watch-assets", "config"], () => {
	return fuse.run();
});

Sparky.task("dist", ["clean", "copy-assets", "config"], () => {
	return fuse.run();
});





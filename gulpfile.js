'use strict';
const { src, dest, parallel, series, watch } = require('gulp');
// Utils
const rename = require('gulp-rename');
const browsersync = require('browser-sync');
const del = require('del');
// CSS
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');

// JS
const webpack = require('webpack-stream');

// Paths
const source = './src';
const dist = './dist';

// NODE_ENV mode
let devMode;
if (process.env.NODE_ENV === 'dev') {
  devMode = true;
} else if (process.env.NODE_ENV === 'prod') {
  devMode = false;
} else {
  throw new Error('Incorrect NODE_ENV');
}

function cleandist() {
  return del(dist);
}

function copyAssets() {
  return src(source + '/assets/**/*')
    .pipe(dest(dist))
    .on('end', browsersync.reload);
}

function compileSass() {
  if (devMode) {
    return src(source + '/sass/main.sass')
      .pipe(sassGlob())
      .pipe(sass({ 'include css': true }))
      .pipe(autoprefixer())
      .pipe(cleanCss({ level: 2 }))
      .pipe(rename('styles.min.css'))
      .pipe(dest(dist))
      .on('end', browsersync.reload);
  } else {
    return src(source + '/sass/main.sass')
      .pipe(sassGlob())
      .pipe(sass({ 'include css': true }))
      .pipe(rename('styles.min.css'))
      .pipe(dest(dist));
  }
}

function compileHTML() {
  return src(source + '/pages/**/*.html')
    .pipe(rename({ dirname: '' }))
    .pipe(dest(dist))
    .pipe(browsersync.stream());
}

function compileJS() {
  if (devMode) {
    return src(source + '/index.js')
      .pipe(
        webpack({
          mode: 'development',
          output: {
            filename: 'script.js',
          },
          watch: false,
          devtool: 'source-map',
          module: {
            rules: [
              {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      [
                        '@babel/preset-env',
                        {
                          debug: true,
                          corejs: 3.22,
                          useBuiltIns: 'usage',
                        },
                      ],
                    ],
                  },
                },
              },
            ],
          },
        })
      )
      .pipe(dest(dist))
      .on('end', browsersync.reload);
  } else {
    return src(source + '/index.js')
      .pipe(
        webpack({
          mode: 'production',
          output: {
            filename: 'script.js',
          },
          module: {
            rules: [
              {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      [
                        '@babel/preset-env',
                        {
                          corejs: 3.22,
                          useBuiltIns: 'usage',
                        },
                      ],
                    ],
                  },
                },
              },
            ],
          },
        })
      )
      .pipe(dest(dist));
  }
}

exports.compileHTMLT = compileHTML;
exports.compileSassT = compileSass;
exports.compileJST = compileJS;
exports.copyAssetsT = copyAssets;

function watchbr() {
  browsersync.init({
    server: {
      baseDir: dist,
      serveStaticOptions: {
        extensions: ['html'],
      },
    },
    port: 3000,
    notify: true,
  });

  watch(source + '/**/*.html', parallel('compileHTMLT'));
  watch(source + '/sass/**/*.sass', parallel('compileSassT'));
  watch(source + '/**/*.js', parallel('compileJST'));
  watch(source + '/assets/**/*', parallel('copyAssetsT'));
}

if (devMode) {
  exports.default = series(
    cleandist,
    parallel(compileHTML, compileSass, compileJS, copyAssets),
    watchbr
  );
} else {
  exports.default = series(cleandist, parallel(compileHTML, compileSass, compileJS, copyAssets));
}

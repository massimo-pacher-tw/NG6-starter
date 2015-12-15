'use strict';

import gulp     from 'gulp';
import webpack  from 'webpack-stream';
import path     from 'path';
import sync     from 'run-sequence';
import serve    from 'browser-sync';
import rename   from 'gulp-rename';
import template from 'gulp-template';
import fs       from 'fs';
import yargs    from 'yargs';
import lodash   from 'lodash';
import protractorServer from 'gulp-protractor';

let protractor = protractorServer.protractor;
let reload = () => serve.reload();
let root = 'src';

// helper method for resolving paths
let resolveToApp = (glob) => {
  glob = glob || '';
  return path.join(root, 'app', glob); // app/{glob}
};

let resolveToComponents = (glob) => {
  glob = glob || '';
  return path.join(root, 'app/components', glob); // app/components/{glob}
};

// map of all paths
let paths = {
  js: resolveToComponents('**/*!(.spec.js).js'), // exclude spec files
  styl: resolveToApp('**/*.scss'), // stylesheets
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],
  entry: path.join(root, 'app/app.js'),
  output: root,
  blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**')
};

// use webpack.config.js to build modules
gulp.task('webpack', () => {
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.output));
});

gulp.task('serve', () => {
  serve({
    port: process.env.PORT || 3000,
    open: false,
    server: { baseDir: root }
  });
});

gulp.task('watch', () => {
  let allPaths = [].concat([paths.js], paths.html, [paths.styl]);
  gulp.watch(allPaths, ['webpack', reload]);
});

'use strict';

//function runProtractor (done) {
//  var params = process.argv;
//  var args = params.length > 3 ? [params[3], params[4]] : [];
//
//  gulp.src(path.join(conf.paths.e2e, '/**/*.js'))
//      .pipe($.protractor.protractor({
//        configFile: 'protractor.conf.js',
//        args: args
//      }))
//      .on('error', function (err) {
//        // Make sure failed tests cause gulp to exit non-zero
//        throw err;
//      })
//      .on('end', function () {
//        // Close browser sync server
//        browserSync.exit();
//        done();
//      });
//}

gulp.task('protractor', () => {
  gulp.src(["./e2e/*.spec.js"])
      .pipe(protractor({
        configFile: "./protractor.conf.js",
        args: ['--baseUrl', 'http://127.0.0.1:3000']
      }))
      .on('error', function(e) { throw e })

});

//gulp.task('protractor', ['protractor:src']);
//gulp.task('protractor:src', ['serve:e2e', 'webdriver-update'], runProtractor);
//gulp.task('protractor:dist', ['serve:e2e-dist', 'webdriver-update'], runProtractor);


gulp.task('default', (done) => {
  sync('webpack', 'serve', 'watch', done);
});

// var gulp = require("gulp");
// // gulp.task('hello', testing => {
// //   console.log('Hello Zell');
// //   testing();
// // });
// var sass = require("gulp-sass");
// var browserSync = require("browser-sync").create();

// gulp.task("browserSync", function() {
//   browserSync.init({
//     server: {
//       baseDir: "app"
//     }
//   });
// });

// gulp.task("sass", function() {
//   return gulp
//     .src("app/sass/**/*.scss")
//     .pipe(sass()) // Converts Sass to CSS with gulp-sass
//     .pipe(gulp.dest("app/css"))
//     .pipe(
//       browserSync.reload({
//         stream: true
//       })
//     );
// });
// // gulp.task('watch', ['browserSync', 'sass'], function(){
// //   gulp.watch('app/sass/main.scss', ['sass']);
// //   gulp.watch('app/index.html', browserSync.reload);
// //   // Other watchers
// // });
// gulp.task(
//   "watch",
//   gulp.series("sass", "browserSync", function() {
//     gulp.watch("app/sass/**/*.scss", function() {
//       gulp.run("sass");
//     });
//     gulp.watch("app/index.html", browserSync.reload);
//     // Other watchers
//   })
// );
// // gulp.task('default', gulp.series('one', 'two', function(done) {
// // // do more stuff
// // done();
// // }));

var gulp = require("gulp"),
  sass = require("gulp-sass"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano"),
  sourcemaps = require("gulp-sourcemaps"),
  browserSync = require("browser-sync").create();

var paths = {
  styles: {
    // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
    src: "app/sass/**/*.scss",
    // Compiled files will end up in whichever folder it's found in (partials are not compiled)
    dest: "app/css"
  },
  html: {
    src: "app/index.html"
  }

  // Easily add additional paths
  // ,html: {
  //  src: '...',
  //  dest: '...'
  // }
};

// function style() {
//   return gulp
//     .src(paths.styles.src)
//     .pipe(sass())
//     .on("error", sass.logError)
//     .pipe(gulp.dest(paths.styles.dest));
// }

function style() {
  return (
    gulp
      .src(paths.styles.src)
      // Initialize sourcemaps before compilation starts
      .pipe(sourcemaps.init())
      .pipe(sass())
      .on("error", sass.logError)
      // Use postcss with autoprefixer and compress the compiled file using cssnano
      .pipe(postcss([autoprefixer(), cssnano()]))
      // Now add/write the sourcemaps
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(paths.styles.dest))
      // Add browsersync stream pipe after compilation
      .pipe(browserSync.stream())
  );
}

exports.style = style;

// A simple task to reload the page
function reload() {
  browserSync.reload();
}

function watch() {
  browserSync.init({
    // You can tell browserSync to use this directory and serve it as a mini-server
    server: {
      baseDir: "app"
    }
    // If you are already serving your website locally using something like apache
    // You can use the proxy setting to proxy that instead
    // proxy: "yourlocal.dev"
  });
  // gulp.watch takes in the location of the files to watch for changes
  // and the name of the function we want to run on change
  gulp.watch(paths.styles.src, style);
  // We should tell gulp which files to watch to trigger the reload
  // This can be html or whatever you're using to develop your website
  // Note -- you can obviously add the path to the Paths object
  gulp.watch(paths.html.src, reload);
}

// Don't forget to expose the task!
exports.watch = watch;

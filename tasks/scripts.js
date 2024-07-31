import gulp from "gulp";
import browserSync from "browser-sync";
import terser from "gulp-terser";
import concat from 'gulp-concat';

// компиляция scss в css
export default function scripts(){
    return gulp.src([
        // "node_modules/swiper/swiper-bundle.js",
        "./src/js/**/*.js",
        "!./src/js/main.min.js",
    ], {encoding: false})
        .pipe(concat("main.min.js"))
        .pipe(terser())
        .pipe(gulp.dest("./src/js/"))
        .pipe(browserSync.stream())
}
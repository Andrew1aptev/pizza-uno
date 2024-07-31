import gulp from "gulp";
import html from "gulp-htmlmin";
import path from "../config/path.js";
import browserSync from "browser-sync";

export default () => {
    return gulp.src(path.html.src, {encoding: false})
        .pipe(html({ collapseWhitespace: false }))
        .pipe(gulp.dest(path.html.dest))
        .pipe(browserSync.stream())
}